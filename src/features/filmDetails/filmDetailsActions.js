import { createAction } from 'redux-actions';
import { httpService, API_CONSTANTS } from 'services';
import { fetchFilms } from '../films';
import { searchField } from '../searchParams';

export const filmDetailsLoading = createAction(
    'FILM_DETAILS_LOADING',
    flag => ({ flag })
);
export const filmDetails = createAction('FILM_DETAILS', film => ({ film }));

export const fetchFilmDetails = filmId => async dispatch => {
    dispatch(filmDetailsLoading(true));

    try {
        const response = await httpService(API_CONSTANTS.FILM_DETAILS(filmId));

        dispatch(filmDetails(response.data));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(filmDetailsLoading(false));
    }
};

export const fetchFilmDetailsInfo = filmId => async (dispatch, getState) => {
    await dispatch(fetchFilmDetails(filmId));

    const genre = getState().filmDetailsInfo.filmDetails.genres[0];

    dispatch(searchField(genre));
    dispatch(fetchFilms());
};
