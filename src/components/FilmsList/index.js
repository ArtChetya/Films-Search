import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import grey from '@material-ui/core/es/colors/grey';
import Grid from '@material-ui/core/Grid';
import { Film } from '../Film';
import { ColorText } from '../ColorText';

const StyledList = styled(Grid)`
    && {
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
    }
`;

const StyledColorText = styled(ColorText)`
    && {
        font-size: 20px;
        margin-top: 20px;
    }
`;

export const FilmsList = ({ films }) => {
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

FilmsList.propTypes = {
    films: PropTypes.array.isRequired
};
