import {
    AppBarProps,
    default as MaterialAppBar
} from '@material-ui/core/AppBar';
import grey from '@material-ui/core/colors/grey';
import {
    default as MaterialToolbar,
    ToolbarProps
} from '@material-ui/core/Toolbar';
import React, { ComponentType, FunctionComponent, ReactNode } from 'react';
import styledComponents from 'styled-components';

export interface IMaterialAppBarProps extends AppBarProps {
    readonly bgcolor: string;
    readonly opacity: number;
}

export interface IToolbarProps extends ToolbarProps {
    readonly minheight: string;
}

export interface IAppBarProps {
    readonly bgcolor?: string;
    readonly opacity?: number;
    readonly minheight?: string;
    children: ReactNode;
}

const StyledMaterialAppBar = styledComponents(MaterialAppBar)<
    IMaterialAppBarProps
>`
    && {
        position: static;
        background-color: ${props => props.bgcolor || grey[900]};
        opacity: ${props => props.opacity || 1};
        padding: 10px 5%;
        line-height: 1.8;
        flex-shrink: 0;
    }
` as ComponentType<IMaterialAppBarProps>;

const StyledToolbar = styledComponents(MaterialToolbar)<IToolbarProps>`
    && {
        min-height: ${props => props.minheight || '36px'};
        padding: 0;
    }
` as ComponentType<IToolbarProps>;

export const AppBar: FunctionComponent<IAppBarProps> = ({
    children,
    bgcolor = grey[900],
    opacity = 1,
    minheight = '36px'
}) => {
    return (
        <StyledMaterialAppBar bgcolor={bgcolor} opacity={opacity}>
            <StyledToolbar minheight={minheight}> {children} </StyledToolbar>
        </StyledMaterialAppBar>
    );
};
