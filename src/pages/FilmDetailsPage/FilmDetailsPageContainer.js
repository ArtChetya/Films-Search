import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FilmDetailsPage } from '.';

export const FilmDetailsPageContainer = ({ match }) => {
    const [filmGenres, setFilmsGenres] = useState([]);
    const [updated, setUpdated] = useState(false);

    return (
        <FilmDetailsPage
            filmId={match.params.id}
            filmGenres={filmGenres}
            setFilmsGenres={setFilmsGenres}
            updated={updated}
            setUpdated={setUpdated}
        />
    );
};

FilmDetailsPageContainer.propTypes = {
    match: PropTypes.object.isRequired
};
