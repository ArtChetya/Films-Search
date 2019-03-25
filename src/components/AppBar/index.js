import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { default as MaterialAppBar } from '@material-ui/core/AppBar';
import { default as MaterialToolbar } from '@material-ui/core/Toolbar';
import grey from '@material-ui/core/colors/grey';

const StyledMaterialAppBar = styled(MaterialAppBar)`
    && {
        position: static;
        background-color: ${props => props.bgcolor || grey[900]};
        opacity: ${props => props.opacity || 1};
        padding: 10px 5%;
        line-height: 1.8;
        flex-shrink: 0;
    }
`;

StyledMaterialAppBar.propTypes = {
    bgcolor: PropTypes.string,
    opacity: PropTypes.number
};

const StyledToolbar = styled(MaterialToolbar)`
    && {
        min-height: ${props => props.minheight || '36px'};
        padding: 0;
    }
`;

StyledToolbar.propTypes = {
    minheight: PropTypes.string
};

export const AppBar = ({ children, bgcolor, opacity, minheight }) => {
    return (
        <StyledMaterialAppBar bgcolor={bgcolor} opacity={opacity}>
            <StyledToolbar minheight={minheight}> {children} </StyledToolbar>
        </StyledMaterialAppBar>
    );
};

AppBar.propTypes = {
    children: PropTypes.node.isRequired,
    bgcolor: PropTypes.string,
    opacity: PropTypes.number,
    minheight: PropTypes.string
};

AppBar.defaultProps = {
    bgcolor: grey[900],
    opacity: 1,
    minheight: '36px'
};
