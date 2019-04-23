import React from 'react';
import PropTypes from 'prop-types';

export const NotFound = ({ location }) => {
    return <span>Route {location.pathname} has not been matched </span>;
};

NotFound.propTypes = {
    location: PropTypes.object.isRequired
};
