import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Film } from '../Film';

const StyledList = styled(Grid)`
    && {
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
    }
`;

export const FilmsList = ({ films }) => {
    return (
        <StyledList
            container
            component="ul"
            spacing={16}
            justify="space-between"
        >
            {films.map(film => (
                <Grid
                    xs={6}
                    md={4}
                    lg={3}
                    xl={2}
                    item
                    component="li"
                    key={film.id}
                >
                    <Film film={film} />
                </Grid>
            ))}
        </StyledList>
    );
};

FilmsList.propTypes = {
    films: PropTypes.array.isRequired
};
