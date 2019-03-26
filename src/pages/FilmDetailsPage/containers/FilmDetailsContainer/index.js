import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { httpService } from '../../../../services/httpService';
import { FilmDetails } from '../../components/FilmDetails';

export const FilmDetailsContainer = ({
    filmId,
    setFilmsGenres,
    updated,
    setUpdated
}) => {
    const [filmDetails, setFilmDetails] = useState({ release_date: '' });

    useEffect(() => {
        let ignore = false;

        async function fetchFilm() {
            const response = await httpService({
                method: 'GET',
                url: `movies/${filmId}`
            });

            if (!ignore) {
                setFilmDetails(response.data);
                setFilmsGenres(response.data.genres);
                setUpdated(!updated);
            }
        }

        fetchFilm();

        return () => {
            ignore = true;
        };
    }, [filmId]);

    return <FilmDetails filmDetails={filmDetails} />;
};

FilmDetailsContainer.propTypes = {
    filmId: PropTypes.string.isRequired,
    setFilmsGenres: PropTypes.func.isRequired,
    updated: PropTypes.bool.isRequired,
    setUpdated: PropTypes.func.isRequired
};
