import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    filmDetailsLoading,
    filmDetails,
    fetchFilmDetails
} from 'features/filmDetails';
import { httpService, API_CONSTANTS } from 'services';

jest.mock('../../../services/httpService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Film Details Actions', () => {
    let flag;
    let film;
    let filmId;

    beforeAll(() => {
        flag = false;

        film = {
            id: 181790,
            title: 'Journey 3: From the Earth to the Moon',
            tagline: '',
            vote_average: 0,
            vote_count: 7,
            release_date: '2018-12-31',
            poster_path:
                'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
            overview:
                'Sean and Hank go on their biggest adventure yet, to the moon.',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
            runtime: null
        };

        filmId = '1';

        httpService.mockResolvedValue({ data: film });

        console.error = jest.fn();
    });

    describe('FILM_DETAILS_LOADING', () => {
        it('should create action film details loading flag', () => {
            const expectedAction = {
                type: 'FILM_DETAILS_LOADING',
                payload: {
                    flag
                }
            };
            expect(filmDetailsLoading(flag)).toEqual(expectedAction);
        });
    });

    describe('FILM_DETAILS', () => {
        it('should create action for updating film details', () => {
            const expectedAction = {
                type: 'FILM_DETAILS',
                payload: {
                    film
                }
            };
            expect(filmDetails(film)).toEqual(expectedAction);
        });
    });

    describe('FETCH_FILM_DETAILS', () => {
        it('should call httpService with correct parameters', () => {
            const store = mockStore({});
            store.dispatch(fetchFilmDetails(filmId));

            expect(httpService).toHaveBeenCalledWith(
                API_CONSTANTS.FILM_DETAILS(filmId)
            );
        });

        it('should dispatch FILM_DETAILS when fetching is done', async () => {
            const store = mockStore({});
            await store.dispatch(fetchFilmDetails(filmId));

            expect(store.getActions()).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        type: 'FILM_DETAILS',
                        payload: { film }
                    })
                ])
            );
        });

        it('should dispatch actions in a correct order when fetching is done', async () => {
            const store = mockStore({});
            const expectedActions = [
                { type: 'FILM_DETAILS_LOADING', payload: { flag: true } },
                { type: 'FILM_DETAILS', payload: { film } },
                { type: 'FILM_DETAILS_LOADING', payload: { flag: false } }
            ];

            await store.dispatch(fetchFilmDetails(filmId));

            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should log an error on fetching error', async () => {
            const store = mockStore({});
            httpService.mockRejectedValue(new Error('Async error'));
            await store.dispatch(fetchFilmDetails(filmId));

            expect(console.error).toHaveBeenCalled();
        });
    });
});
