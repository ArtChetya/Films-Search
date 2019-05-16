import { ThunkDispatch } from 'redux-thunk';
import { API_CONSTANTS, httpService } from 'services';
import { AppState } from '../../configureStore';
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

export const fetchFilms = () => async (
    dispatch: ThunkDispatch<AppState, undefined, any>,
    getState: () => AppState
) => {
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

export const fetchFilmsIfNeeded = () => async (
    dispatch: ThunkDispatch<AppState, undefined, any>,
    getState: () => AppState
) => {
    const { serverSideRenderedFlag: ssrFlag } = getState();

    if (!ssrFlag) {
        await dispatch(fetchFilms());
    } else {
        dispatch(serverSideRenderedFlag(false));
    }
};
