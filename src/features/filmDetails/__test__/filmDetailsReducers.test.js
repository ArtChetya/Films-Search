import {
    filmDetailsInfo,
    filmDetails,
    filmDetailsLoading
} from 'features/filmDetails';

describe('Film Details Reducer', () => {
    let defaultFilmDetailsInfoState;

    beforeAll(() => {
        defaultFilmDetailsInfoState = {
            filmDetails: {},
            isFilmDetailsLoading: false
        };
    });

    it('should return the initial state', () => {
        expect(
            filmDetailsInfo(undefined, { type: 'NOT_EXISTING_ACTION' })
        ).toEqual(defaultFilmDetailsInfoState);
    });

    it('should handle FILM_DETAILS action', () => {
        const film = {
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

        const expected = {
            filmDetails: film,
            isFilmDetailsLoading: false
        };

        expect(
            filmDetailsInfo(defaultFilmDetailsInfoState, filmDetails(film))
        ).toEqual(expected);
    });

    it('should handle FILM_DETAILS_LOADING action', () => {
        const isFilmDetailsLoading = true;
        const expected = {
            filmDetails: {},
            isFilmDetailsLoading
        };

        expect(
            filmDetailsInfo(
                defaultFilmDetailsInfoState,
                filmDetailsLoading(isFilmDetailsLoading)
            )
        ).toEqual(expected);
    });
});
