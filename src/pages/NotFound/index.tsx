import React, { FunctionComponent } from 'react';
import { RouteProps } from 'react-router';

export const NotFound: FunctionComponent<RouteProps> = ({ location }) => {
    return (
        <span>Route {location && location.pathname} has not been matched </span>
    );
};
