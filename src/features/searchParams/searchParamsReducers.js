import { handleActions } from 'redux-actions';
import { params, sortBy, searchField } from './searchParamsActions';

const defaultState = {
    search: '',
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    limit: 50
};

export const searchParams = handleActions(
    {
        [params]: (state, { payload: { data } }) => {
            return {
                ...state,
                ...data
            };
        },
        [sortBy]: (state, { payload: { id } }) => {
            return {
                ...state,
                sortBy: id
            };
        },
        [searchField]: (state, { payload: { text } }) => {
            return {
                ...state,
                search: text
            };
        }
    },
    defaultState
);
