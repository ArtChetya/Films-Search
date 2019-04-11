import { createAction } from 'redux-actions';
import { httpService } from 'services';

export const filmsLoading = createAction('FILMS_LOADING', flag => ({ flag }));
export const films = createAction('FILMS', data => ({ data }));

export const fetchFilms = () => async (dispatch, getState) => {
    dispatch(filmsLoading(true));

    const { searchParams } = getState();
    const params = {
        ...searchParams,
        search: searchParams.search.length ? searchParams.search : undefined
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
