import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { httpService } from '../../services/httpService';
import { FilmDetailsPage } from '.';

export const FilmDetailsPageContainer = ({ match }) => {
    const defaultParams = {
        search: undefined,
        searchBy: 'genres',
        sortBy: 'release_date',
        sortOrder: 'desc',
        limit: 50
    };
    const [params] = useState(defaultParams);

    const [filmDetails, setFilmDetails] = useState({
        genres: [],
        release_date: ''
    });

    useEffect(() => {
        const fetchFilm = async () => {
            const response = await httpService({
                method: 'GET',
                url: `movies/${match.params.id}`
            });

            const film = response.data;
            setFilmDetails(film);
        };

        fetchFilm();
    }, [match.params.id]);

    const [filmsByGenres, setFilmsByGenres] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            // setIsLoading(true);
            const response = await httpService({
                params,
                method: 'GET',
                url: 'movies'
            });

            const { data } = response.data;
            setFilmsByGenres(data);
            // setIsLoading(false);
        };

        fetchFilms();
    }, [params]);

    return (
        <FilmDetailsPage
            filmDetails={filmDetails}
            filmsByGenres={filmsByGenres}
        />
    );
};

FilmDetailsPageContainer.propTypes = {
    match: PropTypes.object.isRequired
};
