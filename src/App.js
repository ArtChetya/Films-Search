import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';
import { HomeContainer } from './pages/Home/HomeContainer';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { homeConnector } from './pages/Home/HomeConnector';

const HomeContainerConnected = homeConnector(HomeContainer);

function App() {
    return (
        <ErrorBoundary>
            <Route exact path="/" component={HomeContainerConnected} />
            <Route path="/movie/:id" component={FilmDetailsPageContainer} />
        </ErrorBoundary>
    );
}

export default hot(App);
