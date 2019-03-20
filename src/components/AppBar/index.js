import styled from 'styled-components';
import { default as MaterialAppBar } from '@material-ui/core/AppBar';
import grey from '@material-ui/core/colors/grey';

export const AppBar = styled(MaterialAppBar)`
    && {
        background-color: ${grey[900]};
        opacity: 0.9;
        padding: 10px 5%;
        line-height: 1.8;
        flex-shrink: 0;
    }
`;
