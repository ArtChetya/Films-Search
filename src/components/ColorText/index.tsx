import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React, { ComponentType } from 'react';
import styledComponents from 'styled-components';

export interface IColorTextProps extends TypographyProps {
    fontcolor?: string;
}

export const ColorText = styledComponents(Typography)<IColorTextProps>`
    && {
        color: ${props => props.fontcolor || '#fff'};
    }
` as ComponentType<IColorTextProps>;
