import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { httpService } from '../../../services/httpService';
import { FilmDetails } from '../components/FilmDetails';

export const FilmDetailsContainer = ({ setFilmsGenres }) => {
    const [filmDetails, setFilmDetails] = useState({ release_date: '' });

    useEffect(() => {
        let ignore = false;

        async function fetchFilm() {
            const response = await httpService({
                method: 'GET',
                url: 'movies/68718'
            });
            console.log(response);

            if (!ignore) {
                setFilmDetails(response.data);
                setFilmsGenres(response.data.genres);
            }
        }

        fetchFilm();

        return () => {
            ignore = true;
        };
    }, []);

    return <FilmDetails filmDetails={filmDetails} />;
};

FilmDetailsContainer.propTypes = {
    setFilmsGenres: PropTypes.func.isRequired
};
