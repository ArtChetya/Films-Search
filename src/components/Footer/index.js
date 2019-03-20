import React from 'react';
import pink from '@material-ui/core/colors/pink';
import { AppBar } from '../AppBar';
import { Toolbar } from '../Toolbar';
import { ColorText } from '../ColorText';

export function Footer() {
    return (
        <AppBar position="static">
            <Toolbar>
                <ColorText fontcolor={pink[400]} variant="body2">
                    netflixroulette
                </ColorText>
            </Toolbar>
        </AppBar>
    );
}
