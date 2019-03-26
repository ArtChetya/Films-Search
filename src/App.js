import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'typeface-roboto';
// import { HomeContainer } from './pages/Home/HomeContainer';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';

function App() {
    return (
        <>
            <FilmDetailsPageContainer />
        </>
    );
}

export default hot(App);
