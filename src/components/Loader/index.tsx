import CircularProgress, {
    CircularProgressProps
} from '@material-ui/core/CircularProgress';
import pink from '@material-ui/core/colors/pink';
import Grid, { GridProps } from '@material-ui/core/Grid';
import * as React from 'react';
import styledComponents from 'styled-components';

const StyledGrid = styledComponents(Grid)<GridProps>`
    && {
        width: 100%;
        height: 100%;
    }
` as React.ComponentType<GridProps>;

export interface IProgressProps extends CircularProgressProps {
    size?: string;
    loadercolor?: string;
}

const Progress = styledComponents(CircularProgress)<IProgressProps>`
    && {
        width: ${props => props.size || '90px'};
        height: ${props => props.size || '90px'};
        color: ${props => props.loadercolor || pink[400]};
    }
` as React.ComponentType<IProgressProps>;

interface ILoaderProps {
    size?: string;
    loaderColor?: string;
}

export const Loader: React.FunctionComponent<ILoaderProps> = ({
    size = '90px',
    loaderColor = pink[400]
}) => {
    return (
        <StyledGrid container justify="center" alignItems="center">
            <Progress size={size} loadercolor={loaderColor} />
        </StyledGrid>
    );
};
