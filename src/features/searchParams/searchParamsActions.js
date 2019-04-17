import { createAction } from 'redux-actions';

export const params = createAction('PARAMS', data => ({ data }));
export const sortBy = createAction('SORT_BY', id => ({ id }));
export const searchField = createAction('SEARCH_FIELD', text => ({ text }));
