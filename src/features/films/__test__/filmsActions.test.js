import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { filmsLoading, films, fetchFilms } from 'features/films';
import { httpService, API_CONSTANTS } from 'services';

jest.mock('../../../services/httpService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Films Actions', () => {
    let flag;
    let filmsList;

    beforeAll(() => {
        flag = false;

        filmsList = [
            {
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
            }
        ];

        httpService.mockResolvedValue({ data: { data: filmsList } });

        console.error = jest.fn();
    });

    describe('FILMS_LOADING', () => {
        it('should create action films loading flag', () => {
            const expectedAction = {
                type: 'FILMS_LOADING',
                payload: {
                    flag
                }
            };
            expect(filmsLoading(flag)).toEqual(expectedAction);
        });
    });

    describe('FILMS', () => {
        it('should create action for updating films', () => {
            const expectedAction = {
                type: 'FILMS',
                payload: {
                    data: filmsList
                }
            };
            expect(films(filmsList)).toEqual(expectedAction);
        });
    });

    describe('FETCH_FILMS', () => {
        let defaultStore;

        beforeAll(() => {
            defaultStore = {
                searchParams: {
                    search: '',
                    searchBy: 'title',
                    sortBy: 'release_date',
                    sortOrder: 'desc',
                    limit: 50
                }
            };
        });

        it('should call httpService without search param if it is empty', () => {
            const store = mockStore(defaultStore);
            const expected = {
                ...API_CONSTANTS.FILMS,
                params: {
                    ...defaultStore.searchParams,
                    search: undefined
                }
            };
            store.dispatch(fetchFilms());

            expect(httpService).toHaveBeenCalledWith(expected);
        });

        it('should call httpService with search param if it has value', () => {
            const initilStore = {
                searchParams: {
                    search: 'art',
                    searchBy: 'title',
                    sortBy: 'release_date',
                    sortOrder: 'desc',
                    limit: 50
                }
            };
            const store = mockStore(initilStore);
            const expected = {
                ...API_CONSTANTS.FILMS,
                params: initilStore.searchParams
            };
            store.dispatch(fetchFilms());

            expect(httpService).toHaveBeenCalledWith(expected);
        });

        it('should dispatch FILMS when fetching is done', async () => {
            const store = mockStore(defaultStore);
            await store.dispatch(fetchFilms());

            expect(store.getActions()).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        type: 'FILMS',
                        payload: { data: filmsList }
                    })
                ])
            );
        });

        it('should dispatch actions in a correct order when fetching is done', async () => {
            const store = mockStore(defaultStore);
            const expectedActions = [
                { type: 'FILMS_LOADING', payload: { flag: true } },
                { type: 'FILMS', payload: { data: filmsList } },
                { type: 'FILMS_LOADING', payload: { flag: false } }
            ];

            await store.dispatch(fetchFilms());

            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should log an error on fetching error', async () => {
            const store = mockStore(defaultStore);
            httpService.mockRejectedValue(new Error('Async error'));
            await store.dispatch(fetchFilms());

            expect(console.error).toHaveBeenCalled();
        });
    });
});
