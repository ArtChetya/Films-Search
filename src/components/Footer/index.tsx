import pink from '@material-ui/core/colors/pink';
import { ColorText } from 'components';
import * as React from 'react';
import { AppBar } from '../AppBar';

export const Footer: React.FunctionComponent<{}> = () => {
    return (
        <AppBar opacity={0.9}>
            <ColorText fontcolor={pink[400]} variant="body2">
                netflixroulette
            </ColorText>
        </AppBar>
    );
};
