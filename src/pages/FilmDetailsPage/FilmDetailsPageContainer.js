import React, { useState } from 'react';
import { FilmDetailsPage } from '.';

export const FilmDetailsPageContainer = () => {
    const [filmGenres, setFilmsGenres] = useState([]);

    return (
        <FilmDetailsPage
            filmGenres={filmGenres}
            setFilmsGenres={setFilmsGenres}
        />
    );
};
