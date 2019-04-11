import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';
import { ErrorBoundary } from 'components';
import { HomeContainer } from './pages/Home/HomeContainer';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';
import { homeConnector } from './pages/Home/HomeConnector';
import { filmDetailsPageConnector } from './pages/FilmDetailsPage/FilmDetailsPageConnector';

const HomeContainerConnected = homeConnector(HomeContainer);
const filmDetailsPageContainerConnected = filmDetailsPageConnector(
    FilmDetailsPageContainer
);

function App() {
    return (
        <ErrorBoundary>
            <Route exact path="/" component={HomeContainerConnected} />
            <Route
                path="/movie/:id"
                component={filmDetailsPageContainerConnected}
            />
        </ErrorBoundary>
    );
}

export default hot(App);
