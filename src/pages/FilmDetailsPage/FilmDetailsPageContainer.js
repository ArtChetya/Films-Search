import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FilmDetailsPage } from '.';

export const FilmDetailsPageContainer = ({
    match,
    history,
    fetchFilmDetailsInfo,
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
    }, [setParams]);

    useEffect(() => {
        fetchFilmDetailsInfo(match.params.id);
    }, [match.params.id, fetchFilmDetailsInfo]);

    useEffect(() => {
        if (!filmDetails) {
            return () => {};
        }

        if (!Object.keys(filmDetails).length) {
            history.push('/not-found');
        }

        return () => clearFilmDetails();
    }, [filmDetails, history, clearFilmDetails]);

    return (
        <FilmDetailsPage
            filmDetails={filmDetails}
            isFilmDetailsLoading={isFilmDetailsLoading}
            isFilmsLoading={isFilmsLoading}
        />
    );
};

FilmDetailsPageContainer.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchFilmDetailsInfo: PropTypes.func.isRequired,
    filmDetails: PropTypes.object.isRequired,
    isFilmDetailsLoading: PropTypes.bool.isRequired,
    isFilmsLoading: PropTypes.bool.isRequired,
    setParams: PropTypes.func.isRequired,
    clearFilmDetails: PropTypes.func.isRequired
};
