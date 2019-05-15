import { IFilmDetails } from '../filmDetails';

export interface IFilmsState {
    films: IFilmDetails[];
    isFilmsLoading: boolean;
}

export const FILMS = 'FILMS';
export const FILMS_LOADING = 'FILMS_LOADING';

interface IFilmsAction {
    type: typeof FILMS;
    payload: {
        data: IFilmDetails[];
    };
}

interface IFilmsLoadingAction {
    type: typeof FILMS_LOADING;
    payload: {
        flag: boolean;
    };
}

export type FilmsActionTypes = IFilmsAction | IFilmsLoadingAction;
