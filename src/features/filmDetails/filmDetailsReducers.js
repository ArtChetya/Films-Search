import { handleActions } from 'redux-actions';
import {
    filmDetails as filmDetailsAction,
    filmDetailsLoading,
    clearFilmDetails
} from './filmDetailsActions';

const defaultFilmDetailsInfoState = {
    filmDetails: null,
    isFilmDetailsLoading: true
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
        },
        [clearFilmDetails]: state => {
            return {
                ...state,
                filmDetailsInfo: null
            };
        }
    },
    defaultFilmDetailsInfoState
);
