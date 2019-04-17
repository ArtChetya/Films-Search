import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FilmDetailsPage } from '.';

export const FilmDetailsPageContainer = ({
    match,
    fetchFilmDetailsInfo,
    isFilmDetailsLoading,
    isFilmsLoading,
    filmDetails,
    setParams
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

    return (
        <FilmDetailsPage
            filmDetails={filmDetails}
            isFilmDetailsLoading={isFilmDetailsLoading}
            isFilmsLoading={isFilmsLoading}
        />
    );
};

FilmDetailsPageContainer.propTypes = {
    match: PropTypes.object.isRequired,
    fetchFilmDetailsInfo: PropTypes.func.isRequired,
    filmDetails: PropTypes.object.isRequired,
    isFilmDetailsLoading: PropTypes.bool.isRequired,
    isFilmsLoading: PropTypes.bool.isRequired,
    setParams: PropTypes.func.isRequired
};
