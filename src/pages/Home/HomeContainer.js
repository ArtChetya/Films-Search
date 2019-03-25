import React, { useState } from 'react';
import { Home } from '.';

export const HomeContainer = () => {
    const [searchField, setSearchField] = useState('');

    const searchByOptionsList = [
        { id: 'title', label: 'Title' },
        { id: 'genre', label: 'Genre' }
    ];
    const [searchByOptions] = useState(searchByOptionsList);
    const [searchById, setSearchById] = useState(searchByOptionsList[0].id);

    const sortByOptionsList = [
        { id: 'releaseDate', label: 'release date' },
        { id: 'rating', label: 'rating' }
    ];
    const [sortByOptions] = useState(sortByOptionsList);
    const [sortById, setSortById] = useState(sortByOptionsList[0].id);
    const [filmsTotal, setFilmsTotal] = useState(0);
    const [updatedSearchForm, setUpdatedSearchForm] = useState(false);

    const onSearch = event => {
        event.preventDefault();
        console.log(searchField);
        console.log(searchById);
        console.log(sortById);
        setUpdatedSearchForm(!updatedSearchForm);
    };

    return (
        <Home
            searchField={searchField}
            setSearchField={setSearchField}
            searchByOptions={searchByOptions}
            searchById={searchById}
            setSearchById={setSearchById}
            sortByOptions={sortByOptions}
            sortById={sortById}
            setSortById={setSortById}
            filmsTotal={filmsTotal}
            setFilmsTotal={setFilmsTotal}
            onSearch={onSearch}
            updatedSearchForm={updatedSearchForm}
        />
    );
};
