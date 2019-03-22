import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ColorButton } from '../../../../components/ColorButton';
import { TransformText } from '../../../../components/TransformText';
import { SearchBy } from '../SearchBy';

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

export const SearchForm = ({
    searchField,
    setSearchField,
    searchByOptions,
    searchById,
    setSearchById,
    onSearch
}) => {
    return (
        <form onSubmit={onSearch}>
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
                        selectedOptionId={searchById}
                        onOptionChange={setSearchById}
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
    searchField: PropTypes.string.isRequired,
    setSearchField: PropTypes.func.isRequired,
    searchByOptions: PropTypes.array.isRequired,
    searchById: PropTypes.string.isRequired,
    setSearchById: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};