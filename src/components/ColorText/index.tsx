import Typography, { TypographyProps } from '@material-ui/core/Typography';
import styledComponents from 'styled-components';

export interface IColorTextProps extends TypographyProps {
    fontcolor: string;
}

export const ColorText = styledComponents(Typography)<IColorTextProps>`
    && {
        color: ${props => props.fontcolor || '#fff'};
    }
` as React.ComponentType<IColorTextProps>;
