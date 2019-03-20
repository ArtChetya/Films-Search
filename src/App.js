import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { HomeContainer } from './pages/Home/HomeContainer';

const PageGrid = styled(Grid)`
    && {
        height: 100vh;
        width: 100%;
    }
`;

function App() {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <HomeContainer />
        </PageGrid>
    );
}

export default hot(App);
