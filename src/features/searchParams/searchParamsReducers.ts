import {
    ISearchParamsState,
    PARAMS,
    SEARCH_FIELD,
    SearchParamsActionTypes,
    SORT_BY
} from './types';

const defaultState: ISearchParamsState = {
    search: '',
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    limit: 50
};

export const searchParams = (
    state = defaultState,
    action: SearchParamsActionTypes
): ISearchParamsState => {
    switch (action.type) {
        case PARAMS:
            return {
                ...state,
                ...action.payload.data
            };
        case SORT_BY:
            return {
                ...state,
                sortBy: action.payload.id
            };
        case SEARCH_FIELD:
            return {
                ...state,
                search: action.payload.text
            };
        default:
            return state;
    }
};
