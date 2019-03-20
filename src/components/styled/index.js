import styled from 'styled-components';
import { default as MaterialAppBar } from '@material-ui/core/AppBar';
import { default as MaterialToolbar } from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';

export const AppBar = styled(MaterialAppBar)`
    && {
        background-color: ${grey[900]};
        opacity: 0.9;
        padding: 10px 5%;
        line-height: 1.8;
        flex-shrink: 0;
    }
`;

export const Toolbar = styled(MaterialToolbar)`
    && {
        min-height: 36px;
        padding: 0;
    }
`;

export const PinkText = styled(Typography)`
    && {
        color: ${pink[400]};
    }
`;

export const PageContentWrapper = styled('main')`
    && {
        flex-grow: 1;
        overflow: auto;
        background-color: rgb(250, 250, 250);
        padding: 0 5%;
    }
`;
