import {
    searchParams,
    params,
    sortBy,
    searchField
} from 'features/searchParams';

describe('Films Reducer', () => {
    let defaultState;

    beforeAll(() => {
        defaultState = {
            search: '',
            searchBy: 'title',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };
    });

    it('should return the initial state', () => {
        expect(
            searchParams(undefined, { type: 'NOT_EXISTING_ACTION' })
        ).toEqual(defaultState);
    });

    it('should handle PARAMS action', () => {
        const expected = {
            search: 'art',
            searchBy: 'genres',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };

        expect(searchParams(defaultState, params(expected))).toEqual(expected);
    });

    it('should handle SORT_BY action', () => {
        const sortByValue = 'vote_average';
        const expected = {
            search: '',
            searchBy: 'title',
            sortBy: sortByValue,
            sortOrder: 'desc',
            limit: 50
        };

        expect(searchParams(defaultState, sortBy(sortByValue))).toEqual(
            expected
        );
    });

    it('should handle SEARCH_FIELD action', () => {
        const search = 'art';
        const expected = {
            search,
            searchBy: 'title',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };

        expect(searchParams(defaultState, searchField(search))).toEqual(
            expected
        );
    });
});
