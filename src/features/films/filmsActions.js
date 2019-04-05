import { createAction } from 'redux-actions';
import { httpService } from '../../services/httpService';

export const filmsLoading = createAction('FILMS_LOADING', flag => ({ flag }));
export const films = createAction('FILMS', data => ({ data }));

export const fetchFilms = requestParams => async dispatch => {
    dispatch(filmsLoading(true));

    const params = {
        ...requestParams,
        search: requestParams.search.length ? requestParams.search : undefined
    };

    try {
        const response = await httpService({
            params,
            method: 'GET',
            url: 'movies'
        });

        const { data } = response.data;
        dispatch(films(data));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(filmsLoading(false));
    }
};
