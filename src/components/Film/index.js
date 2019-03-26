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

const StyledCard = styled(Card)`
    && {
        height: 610px;

        @media (max-width: 599px) {
            height: 400px;
        }

        @media (min-width: 600px) and (max-width: 959px) {
            height: 450px;
        }

        @media (min-width: 960px) and (max-width: 1279px) {
            height: 440px;
        }

        @media (min-width: 1280px) and (max-width: 1919px) {
            height: 410px;
        }

        @media (min-width: 1920px) {
            height: 480px;
        }
    }
`;

const StyledCardMedia = styled(CardMedia)`
    && {
        height: 400px;
        background-size: contain;

        @media (max-width: 599px) {
            height: 306px;
        }

        @media (min-width: 600px) and (max-width: 959px) {
            height: 340px;
        }

        @media (min-width: 960px) and (max-width: 1279px) {
            height: 310px;
        }

        @media (min-width: 1280px) and (max-width: 1919px) {
            height: 270px;
        }

        @media (min-width: 1920px) {
            height: 360px;
        }
    }
`;

export const Film = ({ film }) => {
    const year = film.release_date.split('-')[0];

    return (
        <StyledCard raised>
            <StyledCardMedia image={film.poster_path} />

            <CardContent>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={9} lg={7}>
                        <TransformText
                            transform="uppercase"
                            variant="subtitle2"
                            fontcolor={grey[700]}
                        >
                            {film.title}
                        </TransformText>
                    </Grid>

                    <Grid item xs={3} lg={5}>
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
        </StyledCard>
    );
};

Film.propTypes = {
    film: PropTypes.object.isRequired
};
