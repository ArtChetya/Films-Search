import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { queryToParams } from 'utils';
import { params as paramsAction } from 'features/searchParams';
import { fetchFilms } from 'features/films';
import { serverSideRenderedFlag } from 'features/serverSideRendered';
import { Home } from '.';

export const HomeContainer = ({
    match,
    history,
    sortBy,
    setSortBy,
    fetchFilmsIfNeeded,
    setParams,
    isFilmsLoading
}) => {
    const sortByOptionsList = [
        { id: 'release_date', label: 'release date' },
        { id: 'vote_average', label: 'rating' }
    ];
    const [sortByOptions] = useState(sortByOptionsList);

    const onSearch = (search, searchBy) => {
        const isByTitleSearch = searchBy === 'title';

        const searchVal = isByTitleSearch ? search : search.split(' ')[0];

        history.push(
            encodeURI(
                `/search/search=${searchVal} searchBy=${searchBy} sortBy=${sortBy}`
            )
        );
    };

    const onSort = id => {
        if (id !== sortBy) {
            setSortBy(id);
            fetchFilms();
        }
    };

    useEffect(() => {
        const queryParams = queryToParams(match.params.query);

        const defaultParams = {
            search: '',
            searchBy: 'title',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };

        setParams({
            ...defaultParams,
            ...queryParams
        });

        fetchFilmsIfNeeded();
    }, [setParams, fetchFilmsIfNeeded, match.params.query]);

    return (
        <Home
            sortByOptions={sortByOptions}
            sortById={sortBy}
            setSortById={onSort}
            onSearch={onSearch}
            isLoading={isFilmsLoading}
        />
    );
};

HomeContainer.onInit = (store, match) => {
    const queryParams = queryToParams(decodeURI(match.params.query));
    const defaultParams = {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder: 'desc',
        limit: 50
    };

    store.dispatch(
        paramsAction({
            ...defaultParams,
            ...queryParams
        })
    );

    store.dispatch(serverSideRenderedFlag(true));

    return store.dispatch(fetchFilms());
};

HomeContainer.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
    fetchFilmsIfNeeded: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    isFilmsLoading: PropTypes.bool.isRequired
};
