import React, { useState } from 'react';
import { Home } from '.';

export function HomeContainer() {
    const [searchField, setSearchField] = useState('');
    const [searchByLabels] = useState(['Title', 'Genre']);
    const [selectedLabel, setSelectedLabel] = useState('Title');

    return (
        <Home
            searchField={searchField}
            setSearchField={setSearchField}
            searchByLabels={searchByLabels}
            selectedLabel={selectedLabel}
            setSelectedLabel={setSelectedLabel}
        />
    );
}
