import React from 'react';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import { ColorButton } from '../ColorButton';
import { AppBar } from '../AppBar';
import { Toolbar } from '../Toolbar';
import { ColorText } from '../ColorText';

export function Header({ hasSearch, content }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <ColorText fontcolor={pink[400]} variant="h6">
                            netflixroulette
                        </ColorText>
                    </Grid>

                    {hasSearch && (
                        <Grid item>
                            <ColorButton size="medium" variant="contained">
                                Search
                            </ColorButton>
                        </Grid>
                    )}

                    {content && (
                        <Grid item xs={12}>
                            {content}
                        </Grid>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    hasSearch: PropTypes.bool,
    content: PropTypes.node
};

Header.defaultProps = {
    hasSearch: false,
    content: false
};
