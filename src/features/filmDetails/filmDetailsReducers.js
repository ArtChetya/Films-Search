import { handleActions } from 'redux-actions';
import {
    filmDetails as filmDetailsAction,
    filmDetailsLoading
} from './filmDetailsActions';

const defaultFilmDetailsInfoState = {
    filmDetails: {},
    isFilmDetailsLoading: false
};

export const filmDetailsInfo = handleActions(
    {
        [filmDetailsAction]: (state, { payload: { film } }) => {
            return {
                ...state,
                filmDetails: { ...film }
            };
        },
        [filmDetailsLoading]: (state, { payload: { flag } }) => {
            return {
                ...state,
                isFilmDetailsLoading: flag
            };
        }
    },
    defaultFilmDetailsInfoState
);
