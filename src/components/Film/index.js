import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import Chip from '@material-ui/core/Chip';
import { CardMedia } from '@material-ui/core';
import { TransformText } from '../TransformText';

const StyledCardMedia = styled(CardMedia)`
    && {
        height: 500px;
        backgroundsize: contain;
    }
`;

export const Film = ({ film }) => {
    const year = film.release_date.split('-')[0];

    return (
        <Card raised>
            <StyledCardMedia image={film.poster_path} />

            <CardContent>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={9}>
                        <TransformText
                            transform="uppercase"
                            variant="subtitle2"
                            fontcolor={grey[700]}
                        >
                            {film.title}
                        </TransformText>
                    </Grid>

                    <Grid item xs={3}>
                        <Chip label={year} variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TransformText
                            transform="capitalize"
                            variant="caption"
                            fontcolor={grey[700]}
                        >
                            {film.genres.join(' & ')}
                        </TransformText>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

Film.propTypes = {
    film: PropTypes.object.isRequired
};
