import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { httpService } from '../../services/httpService';
import { FilmsList } from '../../components/FilmsList';

export const FilmsSectionContainer = ({
    setFilmsTotal,
    search,
    searchBy,
    sortBy,
    updated
}) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchFilms() {
            const rawResponse = await httpService({
                params: {
                    search,
                    searchBy,
                    sortBy,
                    limit: 50
                },
                method: 'GET',
                url: 'movies'
            });

            if (!ignore) {
                const { data, total } = rawResponse.data;
                setFilms(data);
                setFilmsTotal(total);
            }
        }

        if (search.length) {
            fetchFilms();
        } else {
            setFilms([]);
            setFilmsTotal(0);
        }

        return () => {
            ignore = true;
        };
    }, [updated]);

    return <FilmsList films={films} />;
};

FilmsSectionContainer.propTypes = {
    setFilmsTotal: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    updated: PropTypes.bool.isRequired
};
