import { handleActions } from 'redux-actions';
import { films as filmsAction, filmsLoading } from './filmsActions';

const defaultFilmsInfoState = {
    films: [],
    isFilmsLoading: false
};

export const filmsInfo = handleActions(
    {
        [filmsAction]: (state, { payload: { data } }) => {
            return {
                ...state,
                films: [...data]
            };
        },
        [filmsLoading]: (state, { payload: { flag } }) => {
            return {
                ...state,
                isFilmsLoading: flag
            };
        }
    },
    defaultFilmsInfoState
);
