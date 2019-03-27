import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/colors/pink';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const StyledGrid = styled(Grid)`
    && {
        width: 100%;
        height: 100%;
    }
`;

const Progress = styled(CircularProgress)`
    && {
        width: ${props => props.size || '90px'};
        height: ${props => props.size || '90px'};
        color: ${props => props.loadercolor || pink[400]};
    }
`;

export const Loader = ({ size, loaderColor }) => {
    return (
        <StyledGrid container justify="center" alignItems="center">
            <Progress size={size} loadercolor={loaderColor} />
        </StyledGrid>
    );
};

Loader.propTypes = {
    size: PropTypes.string,
    loaderColor: PropTypes.string
};

Loader.defaultProps = {
    size: '90px',
    loaderColor: pink[400]
};
