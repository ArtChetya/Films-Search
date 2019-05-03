import { createAction } from 'redux-actions';
import { httpService, API_CONSTANTS } from 'services';
import { fetchFilms } from '../films';
import { searchField } from '../searchParams';
import { serverSideRenderedFlag } from '../serverSideRendered';

export const filmDetailsLoading = createAction(
    'FILM_DETAILS_LOADING',
    flag => ({ flag })
);

export const filmDetails = createAction('FILM_DETAILS', film => ({ film }));

export const clearFilmDetails = createAction('CLEAR FILM_DETAILS');

export const fetchFilmDetails = filmId => async dispatch => {
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

export const fetchFilmDetailsInfo = filmId => async (dispatch, getState) => {
    await dispatch(fetchFilmDetails(filmId));

    const { filmDetails: details } = getState().filmDetailsInfo;
    if (!details || !Object.keys(details).length) {
        return;
    }

    const genre = details.genres[0];

    dispatch(searchField(genre));
    await dispatch(fetchFilms());
};

export const fetchFilmDetailsInfoIfNeeded = filmId => async (
    dispatch,
    getState
) => {
    const { serverSideRenderedFlag: ssrFlag } = getState();

    if (!ssrFlag) {
        await dispatch(fetchFilmDetailsInfo(filmId));
    } else {
        dispatch(serverSideRenderedFlag(false));
    }
};
