import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import { AppBar, PinkText, Toolbar } from '../styled';

const WhiteButton = styled(Button)`
    && {
        color: ${pink[400]};
        background-color: #fff;
    }
`;

export function Header({ hasSearch, content }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <PinkText variant="h6">netflixroulette</PinkText>
                    </Grid>

                    {hasSearch && (
                        <Grid item>
                            <WhiteButton size="medium" variant="contained">
                                Search
                            </WhiteButton>
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
