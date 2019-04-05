import React, { useState, useEffect } from 'react';
import { Home } from '.';

export const HomeContainer = ({
    sortBy,
    setSortBy,
    fetchFilms,
    params,
    setParams,
    isFilmsLoading
}) => {
    const sortByOptionsList = [
        { id: 'release_date', label: 'release date' },
        { id: 'vote_average', label: 'rating' }
    ];
    const [sortByOptions] = useState(sortByOptionsList);

    const onSearch = (event, search, searchBy) => {
        event.preventDefault();

        const isByTitleSearch = searchBy === 'title';

        const searchVal = isByTitleSearch ? search : search.split(' ')[0];

        setParams({
            ...params,
            search: searchVal,
            sortBy,
            searchBy
        });
    };

    useEffect(() => {
        fetchFilms(params);
    }, [params, fetchFilms]);

    return (
        <Home
            sortByOptions={sortByOptions}
            sortById={sortBy}
            setSortById={setSortBy}
            onSearch={onSearch}
            isLoading={isFilmsLoading}
        />
    );
};
