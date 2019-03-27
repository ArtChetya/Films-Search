import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/es/colors/pink';
import grey from '@material-ui/core/es/colors/grey';
import lightGreen from '@material-ui/core/es/colors/lightGreen';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { ColorText } from '../../../../components/ColorText';

const Poster = styled.img`
    && {
        width: 175px;
        height: auto;
    }
`;

const Rating = styled(Chip)`
    && {
        color: ${lightGreen[400]};
        border-color: ${lightGreen[400]};
        margin-left: 15px;
    }
`;

const MarginedText = styled(ColorText)`
    && {
        margin-left: 15px;
    }
`;

export const FilmDetails = ({ filmDetails }) => {
    const year =
        filmDetails.release_date && filmDetails.release_date.split('-')[0];

    return (
        <Grid container wrap="nowrap">
            <Grid item xs={3}>
                <Poster alt="Film Poster" src={filmDetails.poster_path} />
            </Grid>

            <Grid item container direction="column" spacing={8}>
                <Grid item container>
                    <ColorText variant="h5" fontcolor={pink[400]}>
                        {' '}
                        {filmDetails.title}{' '}
                    </ColorText>
                    <Rating
                        label={filmDetails.vote_average}
                        variant="outlined"
                    />
                </Grid>

                <Grid item>
                    <ColorText varaint="body1" fontcolor={grey[300]}>
                        {filmDetails.tagline}
                    </ColorText>
                </Grid>

                <Grid item container>
                    <ColorText varaint="subtitle2">{year}</ColorText>
                    <MarginedText varaint="subtitle2">
                        {filmDetails.runtime} min
                    </MarginedText>
                </Grid>

                <Grid item>
                    <ColorText varaint="body1" fontcolor={grey[300]}>
                        {filmDetails.overview}
                    </ColorText>
                </Grid>
            </Grid>
        </Grid>
    );
};

FilmDetails.propTypes = {
    filmDetails: PropTypes.object.isRequired
};
