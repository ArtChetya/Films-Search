import { filmsInfo, films, filmsLoading } from 'features/films';

describe('Films Reducer', () => {
    let defaultFilmsInfoState;

    beforeAll(() => {
        defaultFilmsInfoState = {
            films: [],
            isFilmsLoading: false
        };
    });

    it('should return the initial state', () => {
        expect(filmsInfo(undefined, { type: 'NOT_EXISTING_ACTION' })).toEqual(
            defaultFilmsInfoState
        );
    });

    it('should handle FILMS action', () => {
        const filmsList = [
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

        const expected = {
            films: filmsList,
            isFilmsLoading: false
        };

        expect(filmsInfo(defaultFilmsInfoState, films(filmsList))).toEqual(
            expected
        );
    });

    it('should handle FILM_LOADING action', () => {
        const isFilmsLoading = true;
        const expected = {
            films: [],
            isFilmsLoading
        };

        expect(
            filmsInfo(defaultFilmsInfoState, filmsLoading(isFilmsLoading))
        ).toEqual(expected);
    });
});
