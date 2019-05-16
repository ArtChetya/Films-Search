import {
    AppBarProps,
    default as MaterialAppBar
} from '@material-ui/core/AppBar';
import grey from '@material-ui/core/colors/grey';
import {
    default as MaterialToolbar,
    ToolbarProps
} from '@material-ui/core/Toolbar';
import * as React from 'react';
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
    children: React.ReactNode;
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
` as React.ComponentType<IMaterialAppBarProps>;

const StyledToolbar = styledComponents(MaterialToolbar)<IToolbarProps>`
    && {
        min-height: ${props => props.minheight || '36px'};
        padding: 0;
    }
` as React.ComponentType<IToolbarProps>;

export const AppBar: React.FunctionComponent<IAppBarProps> = ({
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

AppBar.defaultProps = {
    bgcolor: grey[900],
    opacity: 1,
    minheight: '36px'
};
