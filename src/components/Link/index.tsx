import * as React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import styledComponents from 'styled-components';

export const Link = styledComponents(RouterLink)<LinkProps>`
    && {
        color: initial;
        text-decoration: none;
    }
` as React.ComponentType<LinkProps>;
