import Chip, { ChipProps } from '@material-ui/core/Chip';
import grey from '@material-ui/core/colors/grey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import { ColorText, IColorTextProps } from 'components';
import { IFilmDetails } from 'features/filmDetails';
import React, { ComponentType, ElementType, FunctionComponent } from 'react';
import styledComponents from 'styled-components';
import { releaseDateToYear } from 'utils';

const Poster = styledComponents.img`
    && {
        width: 175px;
        height: auto;
    }
` as ElementType<any>;

const Rating = styledComponents(Chip)<ChipProps>`
    && {
        color: ${lightGreen[400]};
        border-color: ${lightGreen[400]};
        margin-left: 15px;
    }
` as ComponentType<ChipProps>;

const MarginedText = styledComponents(ColorText)<IColorTextProps>`
    && {
        margin-left: 15px;
    }
` as ComponentType<IColorTextProps>;

interface IFilmDetailsProps {
    filmDetails: IFilmDetails;
}

export const FilmDetails: FunctionComponent<IFilmDetailsProps> = ({
    filmDetails
}) => {
    const year = releaseDateToYear(filmDetails.release_date);

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
                    <ColorText variant="body1" fontcolor={grey[300]}>
                        {filmDetails.tagline}
                    </ColorText>
                </Grid>

                <Grid item container>
                    <ColorText variant="subtitle2">{year}</ColorText>
                    <MarginedText variant="subtitle2">
                        {filmDetails.runtime} min
                    </MarginedText>
                </Grid>

                <Grid item>
                    <ColorText variant="body1" fontcolor={grey[300]}>
                        {filmDetails.overview}
                    </ColorText>
                </Grid>
            </Grid>
        </Grid>
    );
};
