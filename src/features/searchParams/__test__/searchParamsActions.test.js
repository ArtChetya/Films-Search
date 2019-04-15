import { params, sortBy, searchField } from 'features/searchParams';

describe('Search Params Actions', () => {
    describe('PARAMS', () => {
        it('should create action for updating params', () => {
            const data = {
                search: '',
                searchBy: 'title',
                sortBy: 'release_date',
                sortOrder: 'desc',
                limit: 50
            };

            const expectedAction = {
                type: 'PARAMS',
                payload: {
                    data
                }
            };
            expect(params(data)).toEqual(expectedAction);
        });
    });

    describe('SORT_BY', () => {
        it('should create action for updating sortBy field', () => {
            const id = 'release_date';
            const expectedAction = {
                type: 'SORT_BY',
                payload: {
                    id
                }
            };
            expect(sortBy(id)).toEqual(expectedAction);
        });
    });

    describe('SEARCH_FIELD', () => {
        it('should create action for updating search field', () => {
            const text = 'art';
            const expectedAction = {
                type: 'SEARCH_FIELD',
                payload: {
                    text
                }
            };
            expect(searchField(text)).toEqual(expectedAction);
        });
    });
});
