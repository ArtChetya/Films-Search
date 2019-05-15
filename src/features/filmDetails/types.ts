export interface IFilmDetails {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
}

export interface IFilmDetailsState {
    filmDetails: IFilmDetails | null;
    isFilmDetailsLoading: boolean;
}

export const FILM_DETAILS = 'FILM_DETAILS';
export const FILM_DETAILS_LOADING = 'FILM_DETAILS_LOADING';
export const CLEAR_FILM_DETAILS = 'CLEAR_FILM_DETAILS';

interface IFilmDetailsAction {
    type: typeof FILM_DETAILS;
    payload: {
        film: IFilmDetails;
    };
}

interface IFilmDetailsLoadingAction {
    type: typeof FILM_DETAILS_LOADING;
    payload: {
        flag: boolean;
    };
}

interface IClearFilmDetailsAction {
    type: typeof CLEAR_FILM_DETAILS;
}

export type FilmDetailsActionTypes =
    | IFilmDetailsAction
    | IFilmDetailsLoadingAction
    | IClearFilmDetailsAction;
