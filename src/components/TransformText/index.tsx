import { ColorText, IColorTextProps } from 'components';
import React, { ComponentType } from 'react';
import styledComponents from 'styled-components';

export interface ITransformTextProps extends IColorTextProps {
    transform: string;
}

export const TransformText = styledComponents(ColorText)<ITransformTextProps>`
    && {
        text-transform: ${props => props.transform || 'capitalize'};
    }
` as ComponentType<ITransformTextProps>;
