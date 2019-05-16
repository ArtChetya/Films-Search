import {
    ISearchParamsState,
    PARAMS,
    SEARCH_FIELD,
    SearchParamsActionTypes,
    SORT_BY
} from './types';

export const params = (data: ISearchParamsState): SearchParamsActionTypes => {
    return {
        type: PARAMS,
        payload: {
            data
        }
    };
};

export const sortBy = (id: string): SearchParamsActionTypes => {
    return {
        type: SORT_BY,
        payload: {
            id
        }
    };
};

export const searchField = (text: string): SearchParamsActionTypes => {
    return {
        type: SEARCH_FIELD,
        payload: {
            text
        }
    };
};
