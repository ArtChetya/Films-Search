import React from 'react';
import { AppBar, PinkText, Toolbar } from '../styled';

export function Footer() {
    return (
        <AppBar position="static">
            <Toolbar>
                <PinkText variant="body2">netflixroulette</PinkText>
            </Toolbar>
        </AppBar>
    );
}
