import { ThunkDispatch } from 'redux-thunk';
import { API_CONSTANTS, httpService } from 'services';
import { AppState } from '../../configureStore';
import { fetchFilms } from '../films';
import { searchField } from '../searchParams';
import { serverSideRenderedFlag } from '../serverSideRendered';
import {
    CLEAR_FILM_DETAILS,
    FILM_DETAILS,
    FILM_DETAILS_LOADING,
    FilmDetailsActionTypes,
    IFilmDetails
} from './types';

export const filmDetails = (film: IFilmDetails): FilmDetailsActionTypes => {
    return {
        type: FILM_DETAILS,
        payload: {
            film
        }
    };
};

export const filmDetailsLoading = (flag: boolean): FilmDetailsActionTypes => {
    return {
        type: FILM_DETAILS_LOADING,
        payload: {
            flag
        }
    };
};

export const clearFilmDetails = (): FilmDetailsActionTypes => {
    return {
        type: CLEAR_FILM_DETAILS
    };
};

export const fetchFilmDetails = (filmId: number | string) => async (
    dispatch: ThunkDispatch<AppState, undefined, any>
) => {
    dispatch(filmDetailsLoading(true));

    try {
        const response = await httpService(API_CONSTANTS.FILM_DETAILS(filmId));

        dispatch(filmDetails(response.data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(filmDetailsLoading(false));
    }
};

export const fetchFilmDetailsInfo = (filmId: number | string) => async (
    dispatch: ThunkDispatch<AppState, undefined, any>,
    getState: () => AppState
) => {
    await dispatch(fetchFilmDetails(filmId));

    const { filmDetails: details } = getState().filmDetailsInfo;
    if (!details || !Object.keys(details).length) {
        return;
    }

    const genre = details.genres[0];

    dispatch(searchField(genre));
    await dispatch(fetchFilms());
};

export const fetchFilmDetailsInfoIfNeeded = (filmId: number | string) => async (
    dispatch: ThunkDispatch<AppState, undefined, any>,
    getState: () => AppState
) => {
    const { serverSideRenderedFlag: ssrFlag } = getState();

    if (!ssrFlag) {
        await dispatch(fetchFilmDetailsInfo(filmId));
    } else {
        dispatch(serverSideRenderedFlag(false));
    }
};
