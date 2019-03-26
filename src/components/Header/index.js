import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import { ColorButton } from '../ColorButton';
import { AppBar } from '../AppBar';
import { ColorText } from '../ColorText';
import { Link } from '../Link';

const GridMarginTop = styled(Grid)`
    && {
        margin-top: 15px;
    }
`;

export const Header = ({ hasSearch, content }) => {
    return (
        <AppBar opacity={0.9}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <ColorText fontcolor={pink[400]} variant="h6">
                        netflixroulette
                    </ColorText>
                </Grid>

                {hasSearch && (
                    <Grid item>
                        <Link to="/">
                            <ColorButton size="medium" variant="contained">
                                Search
                            </ColorButton>
                        </Link>
                    </Grid>
                )}

                {content && (
                    <GridMarginTop item xs={12}>
                        {content}
                    </GridMarginTop>
                )}
            </Grid>
        </AppBar>
    );
};

Header.propTypes = {
    hasSearch: PropTypes.bool,
    content: PropTypes.node
};

Header.defaultProps = {
    hasSearch: false,
    content: false
};
