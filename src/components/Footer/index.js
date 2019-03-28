import React from 'react';
import pink from '@material-ui/core/colors/pink';
import { AppBar } from '../AppBar';
import { ColorText } from '../ColorText';

export const Footer = () => {
    return (
        <AppBar opacity={0.9}>
            <ColorText fontcolor={pink[400]} variant="body2">
                netflixroulette
            </ColorText>
        </AppBar>
    );
};
