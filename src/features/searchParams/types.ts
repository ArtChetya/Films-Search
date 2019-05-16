export interface ISearchParamsState {
    search: string;
    searchBy: string;
    sortBy: string;
    sortOrder: string;
    limit: number;
}

export const PARAMS = 'PARAMS';
export const SORT_BY = 'SORT_BY';
export const SEARCH_FIELD = 'SEARCH_FIELD';

interface IParamsAction {
    type: typeof PARAMS;
    payload: {
        data: ISearchParamsState;
    };
}

interface ISortByAction {
    type: typeof SORT_BY;
    payload: {
        id: string;
    };
}

interface ISearchFieldAction {
    type: typeof SEARCH_FIELD;
    payload: {
        text: string;
    };
}

export type SearchParamsActionTypes =
    | IParamsAction
    | ISortByAction
    | ISearchFieldAction;
