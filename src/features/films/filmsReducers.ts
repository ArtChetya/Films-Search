import { FILMS, FILMS_LOADING, FilmsActionTypes, IFilmsState } from './types';

const defaultFilmsInfoState: IFilmsState = {
    films: [],
    isFilmsLoading: false
};

export const filmsInfo = (
    state = defaultFilmsInfoState,
    action: FilmsActionTypes
): IFilmsState => {
    switch (action.type) {
        case FILMS:
            return {
                ...state,
                films: [...action.payload.data]
            };
        case FILMS_LOADING:
            return {
                ...state,
                isFilmsLoading: action.payload.flag
            };
        default:
            return state;
    }
};
