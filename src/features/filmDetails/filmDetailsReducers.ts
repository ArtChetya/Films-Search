import {
    CLEAR_FILM_DETAILS,
    FILM_DETAILS,
    FILM_DETAILS_LOADING,
    FilmDetailsActionTypes,
    IFilmDetailsState
} from './types';

const defaultFilmDetailsInfoState: IFilmDetailsState = {
    filmDetails: null,
    isFilmDetailsLoading: true
};

export const filmDetailsInfo = (
    state = defaultFilmDetailsInfoState,
    action: FilmDetailsActionTypes
): IFilmDetailsState => {
    switch (action.type) {
        case FILM_DETAILS:
            return {
                ...state,
                filmDetails: { ...action.payload.film }
            };
        case FILM_DETAILS_LOADING:
            return {
                ...state,
                isFilmDetailsLoading: action.payload.flag
            };
        case CLEAR_FILM_DETAILS:
            return {
                ...state,
                filmDetails: null
            };
        default:
            return state;
    }
};
