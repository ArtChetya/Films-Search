import React from 'react';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import { ColorButton } from '../../../../components/ColorButton';

export function SearchForm({ onSearch }) {
    return (
        <form onSubmit={onSearch}>
            <ColorButton
                fontcolor="#fff"
                backgroundcolor={pink[400]}
                type="submit"
                size="large"
            >
                Search
            </ColorButton>
        </form>
    );
}

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired
};
