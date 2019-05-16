import * as React from 'react';
import styledComponents from 'styled-components';

export const PageContentWrapper = styledComponents.main`
    && {
        flex-grow: 1;
        overflow: auto;
        background-color: rgb(250, 250, 250);
        padding: 0 5%;
    }
` as React.ComponentType<{}>;
