import React, { useState, useEffect } from 'react';
import { Home } from '.';
import { httpService } from '../../services/httpService';

export const HomeContainer = () => {
    const [search, setSearch] = useState('');

    const searchByOptionsList = [
        { id: 'title', label: 'Title' },
        { id: 'genres', label: 'Genre' }
    ];
    const [searchByOptions] = useState(searchByOptionsList);
    const [searchById, setSearchById] = useState(searchByOptionsList[0].id);

    const sortByOptionsList = [
        { id: 'release_date', label: 'release date' },
        { id: 'vote_average', label: 'rating' }
    ];
    const [sortByOptions] = useState(sortByOptionsList);
    const [sortById, setSortById] = useState(sortByOptionsList[0].id);

    const defaultParams = {
        search: undefined,
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder: 'desc',
        limit: 50
    };
    const [params, setParams] = useState(defaultParams);

    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onSearch = event => {
        event.preventDefault();

        const isByTitleSearch = searchById === 'title';

        let searchVal;
        if (search.length) {
            searchVal = isByTitleSearch ? search : search.split(' ')[0];
        } else {
            searchVal = undefined;
        }

        setParams({
            ...params,
            search: searchVal,
            sortBy: sortById,
            searchBy: searchById
        });
    };

    const onSortByChange = id => {
        setSortById(id);
        setParams({
            ...params,
            sortBy: id
        });
    };

    useEffect(() => {
        const fetchFilms = async () => {
            setIsLoading(true);
            const response = await httpService({
                params,
                method: 'GET',
                url: 'movies'
            });

            const { data } = response.data;
            setFilms(data);
            setIsLoading(false);
        };

        fetchFilms();
    }, [params]);

    return (
        <Home
            search={search}
            setSearch={setSearch}
            searchByOptions={searchByOptions}
            searchById={searchById}
            setSearchById={setSearchById}
            sortByOptions={sortByOptions}
            sortById={sortById}
            setSortById={onSortByChange}
            films={films}
            onSearch={onSearch}
            isLoading={isLoading}
        />
    );
};
