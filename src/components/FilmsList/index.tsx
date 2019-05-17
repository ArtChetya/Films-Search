import grey from '@material-ui/core/colors/grey';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { ColorText, IColorTextProps } from 'components';
import { IFilmDetails } from 'features/filmDetails';
import React, { ComponentType, FunctionComponent } from 'react';
import styledComponents from 'styled-components';
import { Film } from '../Film';

const StyledList = styledComponents(Grid)<GridProps>`
    && {
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
    }
` as ComponentType<GridProps>;

const StyledColorText = styledComponents(ColorText)<IColorTextProps>`
    && {
        font-size: 20px;
        margin-top: 20px;
    }
` as ComponentType<IColorTextProps>;

interface IFilmsListProps {
    films: IFilmDetails[];
}

export const FilmsList: FunctionComponent<IFilmsListProps> = ({ films }) => {
    return (
        <>
            {films.length ? (
                <StyledList container component="ul" spacing={16}>
                    {films.map(film => (
                        <Grid
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2}
                            item
                            component="li"
                            key={film.id}
                        >
                            <Film film={film} />
                        </Grid>
                    ))}
                </StyledList>
            ) : (
                <StyledColorText variant="body1" fontcolor={grey[900]}>
                    No films to display
                </StyledColorText>
            )}
        </>
    );
};
