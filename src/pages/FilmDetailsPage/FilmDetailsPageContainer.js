import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { params as paramsAction } from 'features/searchParams';
import { fetchFilmDetailsInfo } from 'features/filmDetails';
import { serverSideRenderedFlag } from 'features/serverSideRendered';
import { FilmDetailsPage } from '.';
import { Loader } from '../../components/Loader';

export const FilmDetailsPageContainer = ({
    history,
    match,
    fetchFilmDetailsInfoIfNeeded,
    isFilmDetailsLoading,
    isFilmsLoading,
    filmDetails,
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

FilmDetailsPageContainer.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchFilmDetailsInfoIfNeeded: PropTypes.func.isRequired,
    filmDetails: PropTypes.object,
    isFilmDetailsLoading: PropTypes.bool.isRequired,
    isFilmsLoading: PropTypes.bool.isRequired,
    setParams: PropTypes.func.isRequired,
    clearFilmDetails: PropTypes.func.isRequired
};

FilmDetailsPageContainer.defaultProps = {
    filmDetails: null
};
