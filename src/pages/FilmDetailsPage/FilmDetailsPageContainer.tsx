import { Loader } from 'components';
import { fetchFilmDetailsInfo } from 'features/filmDetails';
import { params as paramsAction } from 'features/searchParams';
import { serverSideRenderedFlag } from 'features/serverSideRendered';
import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { FilmDetailsPage } from '.';
import {
    IFilmDetailsPageDispatchProps,
    IFilmDetailsPageStateProps
} from './FilmDetailsPageConnector';

interface IParams {
    id: string;
}

interface IFilmDetailsPageContainerProps
    extends RouteComponentProps<IParams>,
        IFilmDetailsPageStateProps,
        IFilmDetailsPageDispatchProps {}

export const FilmDetailsPageContainer: FunctionComponent<
    IFilmDetailsPageContainerProps
> & { onInit: (store: any, match: any) => any } = ({
    history,
    match,
    fetchFilmDetailsInfoIfNeeded,
    isFilmDetailsLoading,
    isFilmsLoading,
    filmDetails = null,
    setParams,
    clearFilmDetails
}) => {
    useEffect(() => {
        const defaultParams = {
            search: '',
            searchBy: 'genres',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };

        setParams(defaultParams);

        fetchFilmDetailsInfoIfNeeded(match.params.id);
    }, [match.params.id, fetchFilmDetailsInfoIfNeeded, setParams]);

    useEffect(() => {
        if (!filmDetails) {
            // tslint:disable-next-line
            return () => {};
        }

        if (!Object.keys(filmDetails).length) {
            history.push('/not-found');
        }

        return () => clearFilmDetails();
    }, [filmDetails, history, clearFilmDetails]);

    return filmDetails ? (
        <FilmDetailsPage
            filmDetails={filmDetails}
            isFilmDetailsLoading={isFilmDetailsLoading}
            isFilmsLoading={isFilmsLoading}
        />
    ) : (
        <Loader />
    );
};

FilmDetailsPageContainer.onInit = (store, match) => {
    const defaultParams = {
        search: '',
        searchBy: 'genres',
        sortBy: 'release_date',
        sortOrder: 'desc',
        limit: 50
    };

    store.dispatch(paramsAction(defaultParams));

    store.dispatch(serverSideRenderedFlag(true));

    return store.dispatch(fetchFilmDetailsInfo(match.params.id));
};
