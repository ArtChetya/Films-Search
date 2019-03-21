import React from 'react';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import { FilterBy } from '../FilterBy';

export const SortBy = props => {
    const sortByConfig = {
        title: 'Sort by',
        titleVariant: 'subtitle2',
        activeColor: pink[400],
        defaultColor: grey[700],
        activeBgColor: 'transparent',
        defaultBgColor: 'transparent',
        titleTextTransform: 'none',
        buttonTextTransform: 'lowercase',
        buttonVariant: 'text'
    };

    return <FilterBy {...props} config={sortByConfig} />;
};

SortBy.propTypes = {
    options: PropTypes.array.isRequired,
    selectedOptionId: PropTypes.string.isRequired,
    onOptionChange: PropTypes.func.isRequired
};
