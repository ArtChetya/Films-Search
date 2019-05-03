import { createAction } from 'redux-actions';
import { httpService, API_CONSTANTS } from 'services';
import { serverSideRenderedFlag } from '../serverSideRendered';

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

export const fetchFilmsIfNeeded = () => async (dispatch, getState) => {
    const { serverSideRenderedFlag: ssrFlag } = getState();

    if (!ssrFlag) {
        await dispatch(fetchFilms());
    } else {
        dispatch(serverSideRenderedFlag(false));
    }
};
