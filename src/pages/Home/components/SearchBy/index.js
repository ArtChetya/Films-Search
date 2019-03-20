import React from 'react';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import { ColorButton } from '../../../../components/ColorButton';
import { UppercasedText } from '../../../../components/UppercasedText';

export function SearchBy({ searchByLabels, selectedLabel, setSelectedLabel }) {
    return (
        <Grid container alignItems="center" spacing={8}>
            <Grid item>
                <UppercasedText variant="body1">Search By</UppercasedText>
            </Grid>

            {searchByLabels.map(label => (
                <Grid key={label} item>
                    <ColorButton
                        onClick={() => setSelectedLabel(label)}
                        fontcolor="#fff"
                        backgroundcolor={
                            label === selectedLabel ? pink[400] : grey[700]
                        }
                    >
                        {label}
                    </ColorButton>
                </Grid>
            ))}
        </Grid>
    );
}

SearchBy.propTypes = {
    searchByLabels: PropTypes.array.isRequired,
    selectedLabel: PropTypes.string.isRequired,
    setSelectedLabel: PropTypes.func.isRequired
};
