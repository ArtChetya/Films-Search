import pink from '@material-ui/core/colors/pink';
import { ColorText } from 'components';
import React, { FunctionComponent } from 'react';
import { AppBar } from '../AppBar';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <AppBar opacity={0.9}>
            <ColorText fontcolor={pink[400]} variant="body2">
                netflixroulette
            </ColorText>
        </AppBar>
    );
};
