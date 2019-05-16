import Grid, { GridProps } from '@material-ui/core/Grid';
import * as React from 'react';
import styledComponents from 'styled-components';

export const PageGrid = styledComponents(Grid)<GridProps>`
    && {
        height: 100vh;
        width: 100%;
    }
` as React.ComponentType<GridProps>;
