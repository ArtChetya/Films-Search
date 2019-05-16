import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { AppBar } from '../AppBar';

interface ISplitPaneProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export const SplitPane: React.FunctionComponent<ISplitPaneProps> = ({
    left,
    right
}) => {
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
