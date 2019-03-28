import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import { AppBar } from '../AppBar';

export const SplitPane = ({ left, right }) => {
    return (
        <AppBar bgcolor={grey[200]} minheight="20px">
            <Grid container alignItems="center">
                <Grid item xs={6}>
                    {' '}
                    {left}{' '}
                </Grid>
                <Grid item xs={6} justify="flex-end" container>
                    <Grid item>{right}</Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
};

SplitPane.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

SplitPane.defaultProps = {
    left: false,
    right: false
};
