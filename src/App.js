import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'typeface-roboto';
import { Route } from 'react-router-dom';
import { HomeContainer } from './pages/Home/HomeContainer';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';

function App() {
    return (
        <>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/movie/:id" component={FilmDetailsPageContainer} />
        </>
    );
}

export default hot(App);
