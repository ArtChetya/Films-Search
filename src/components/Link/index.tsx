import React, { ComponentType } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import styledComponents from 'styled-components';

export const Link = styledComponents(RouterLink)<LinkProps>`
    && {
        color: initial;
        text-decoration: none;
    }
` as ComponentType<LinkProps>;
