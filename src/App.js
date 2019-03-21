import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'typeface-roboto';
import { HomeContainer } from './pages/Home/HomeContainer';

function App() {
    return (
        <>
            <HomeContainer />
        </>
    );
}

export default hot(App);
