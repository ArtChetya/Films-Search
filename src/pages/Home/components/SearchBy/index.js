import React from 'react';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import { FilterBy } from '../FilterBy';

export const SearchBy = props => {
    const searchByConfig = {
        title: 'Search By',
        titleVariant: 'body1',
        activeColor: '#fff',
        defaultColor: '#fff',
        activeBgColor: pink[400],
        defaultBgColor: grey[700],
        titleTextTransform: 'uppercase',
        buttonTextTransform: 'uppercase',
        buttonVariant: 'outlined'
    };

    return <FilterBy {...props} config={searchByConfig} />;
};

SearchBy.propTypes = {
    options: PropTypes.array.isRequired,
    selectedOptionId: PropTypes.string.isRequired,
    onOptionChange: PropTypes.func.isRequired
};
