import React, { useEffect, useState, useRef } from 'react';
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

    const [filmDetails, setFilmDetails] = useState({});
    const [isFilmDetailsLoading, setIsFilmDetailsLoading] = useState(false);

    useEffect(() => {
        const fetchFilm = async () => {
            setIsFilmDetailsLoading(true);
            const response = await httpService({
                method: 'GET',
                url: `movies/${match.params.id}`
            });

            const film = response.data;
            setFilmDetails(film);
            setIsFilmDetailsLoading(false);
        };

        fetchFilm();
    }, [match.params.id]);

    const [filmsByGenres, setFilmsByGenres] = useState([]);
    const [isFilmsLoading, setIsFilmsLoading] = useState(false);
    const isInitRef = useRef(true);

    useEffect(() => {
        const fetchFilms = async () => {
            if (!isInitRef.current) {
                setIsFilmsLoading(true);
                const response = await httpService({
                    params: {
                        ...params,
                        search: filmDetails.genres[0]
                    },
                    method: 'GET',
                    url: 'movies'
                });

                const { data } = response.data;
                setFilmsByGenres(data);
                setIsFilmsLoading(false);
            } else {
                isInitRef.current = false;
            }
        };

        fetchFilms();
    }, [params, filmDetails]);

    return (
        <FilmDetailsPage
            filmDetails={filmDetails}
            filmsByGenres={filmsByGenres}
            isFilmDetailsLoading={isFilmDetailsLoading}
            isFilmsLoading={isFilmsLoading}
        />
    );
};

FilmDetailsPageContainer.propTypes = {
    match: PropTypes.object.isRequired
};
