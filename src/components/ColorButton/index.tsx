import Button, { ButtonProps } from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import * as React from 'react';
import styledComponents from 'styled-components';

export interface IColorButtonProps extends ButtonProps {
    fontcolor?: string;
    backgroundcolor?: string;
}

export const ColorButton = styledComponents(Button)<IColorButtonProps>`
    && {
        color: ${props => props.fontcolor || pink[400]};
        background-color: ${props => props.backgroundcolor || '#fff'};

        :hover {
            opacity: 0.7;
            color: ${props => props.fontcolor || pink[400]};
            background-color: ${props => props.backgroundcolor || '#fff'};
        }
    }
` as React.ComponentType<IColorButtonProps>;
