import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { httpService } from '../../services/httpService';
import { FilmsList } from '../../components/FilmsList';
import { Loader } from '../../components/Loader';

export const FilmsSectionContainer = ({
    setFilmsTotal,
    searchField,
    searchBy,
    sortBy,
    updated
}) => {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let ignore = false;

        async function fetchFilms() {
            const isByTitleSearch = searchBy === 'title';
            const searchPropName = isByTitleSearch ? 'search' : 'filter';
            const searchVal = isByTitleSearch
                ? searchField
                : searchField.split(' ');

            setIsLoading(true);

            const rawResponse = await httpService({
                params: {
                    [searchPropName]: searchVal,
                    searchBy,
                    sortBy,
                    sortOrder: 'desc',
                    limit: 50
                },
                method: 'GET',
                url: 'movies'
            });

            if (!ignore) {
                const { data } = rawResponse.data;
                setFilms(data);
                setFilmsTotal(data.length);
            }
            setIsLoading(false);
        }

        if (searchField.length) {
            fetchFilms();
        } else {
            setFilms([]);
            setFilmsTotal(0);
        }

        return () => {
            ignore = true;
        };
    }, [sortBy, updated]);

    return <>{isLoading ? <Loader /> : <FilmsList films={films} />}</>;
};

FilmsSectionContainer.propTypes = {
    setFilmsTotal: PropTypes.func,
    searchField: PropTypes.string.isRequired,
    searchBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string,
    updated: PropTypes.bool
};

FilmsSectionContainer.defaultProps = {
    setFilmsTotal: () => {},
    sortBy: 'rating',
    updated: true
};
