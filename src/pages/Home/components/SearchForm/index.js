import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ColorButton, TransformText } from 'components';
import { SearchBy } from '..';

const SearchField = styled(TextField)`
    && {
        margin: 8px 0;

        div:after {
            border-bottom: 2px solid ${pink[400]};
        }

        & input {
            color: #fff;
        }
    }
`;

export const SearchForm = ({ onSearch }) => {
    const [searchField, setSearchField] = useState('');

    const searchByOptionsList = [
        { id: 'title', label: 'Title' },
        { id: 'genres', label: 'Genre' }
    ];
    const [searchByOptions] = useState(searchByOptionsList);
    const [searchBy, setSearchBy] = useState(searchByOptionsList[0].id);

    const onSubmit = event => {
        event.preventDefault();
        onSearch(searchField, searchBy);
    };

    return (
        <form onSubmit={onSubmit}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={12}>
                    <TransformText transform="uppercase" variant="h6">
                        find your movie
                    </TransformText>
                </Grid>

                <Grid item xs={12}>
                    <SearchField
                        value={searchField}
                        onChange={e => setSearchField(e.target.value)}
                        fullWidth
                        margin="dense"
                        variant="filled"
                    />
                </Grid>

                <Grid item xs={5}>
                    <SearchBy
                        options={searchByOptions}
                        selectedOptionId={searchBy}
                        onOptionChange={setSearchBy}
                    />
                </Grid>

                <Grid item>
                    <ColorButton
                        fontcolor="#fff"
                        backgroundcolor={pink[400]}
                        type="submit"
                        size="large"
                    >
                        Search
                    </ColorButton>
                </Grid>
            </Grid>
        </form>
    );
};

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired
};
