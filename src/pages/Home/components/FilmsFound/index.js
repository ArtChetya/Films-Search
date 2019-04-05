import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { ColorText } from '../../../../components/ColorText';

export const FilmsFound = ({ films }) => {
    return (
        <ColorText variant="subtitle2" fontcolor={grey[900]}>
            {films.length} movies found
        </ColorText>
    );
};

FilmsFound.propTypes = {
    films: PropTypes.array.isRequired
};
