import pink from '@material-ui/core/colors/pink';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { ColorButton, ColorText } from 'components';
import * as React from 'react';
import styledComponents from 'styled-components';
import { AppBar } from '../AppBar';
import { Link } from '../Link';

const GridMarginTop = styledComponents(Grid)<GridProps>`
    && {
        margin-top: 15px;
    }
` as React.ComponentType<GridProps>;

interface IHeaderProps {
    hasSearch?: boolean;
    content?: React.ReactNode | null;
}

export const Header: React.FunctionComponent<IHeaderProps> = ({
    hasSearch = false,
    content = null
}) => {
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
