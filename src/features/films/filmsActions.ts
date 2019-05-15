import { API_CONSTANTS, httpService } from 'services';
import { IFilmDetails } from '../filmDetails';
import { serverSideRenderedFlag } from '../serverSideRendered';
import { FILMS, FILMS_LOADING, FilmsActionTypes } from './types';

export const filmsLoading = (flag: boolean): FilmsActionTypes => {
    return {
        type: FILMS_LOADING,
        payload: {
            flag
        }
    };
};

export const films = (data: IFilmDetails[]): FilmsActionTypes => {
    return {
        type: FILMS,
        payload: {
            data
        }
    };
};

// @ts-ignore
export const fetchFilms = () => async (dispatch, getState) => {
    dispatch(filmsLoading(true));

    const { searchParams } = getState();
    const params = {
        ...searchParams,
        search: searchParams.search.length ? searchParams.search : undefined
    };

    try {
        const response = await httpService({
            ...API_CONSTANTS.FILMS,
            params
        });

        const { data } = response.data;
        dispatch(films(data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(filmsLoading(false));
    }
};

// @ts-ignore
export const fetchFilmsIfNeeded = () => async (dispatch, getState) => {
    const { serverSideRenderedFlag: ssrFlag } = getState();

    if (!ssrFlag) {
        await dispatch(fetchFilms());
    } else {
        // @ts-ignore
        dispatch(serverSideRenderedFlag(false));
    }
};
