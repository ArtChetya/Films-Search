import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'components';
import { HomeContainer } from './pages/Home/HomeContainer';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';
import { homeConnector } from './pages/Home/HomeConnector';
import { filmDetailsPageConnector } from './pages/FilmDetailsPage/FilmDetailsPageConnector';
import { NotFound } from './pages/NotFound';

const HomeContainerConnected = homeConnector(HomeContainer);
const filmDetailsPageContainerConnected = filmDetailsPageConnector(
    FilmDetailsPageContainer
);

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeContainerConnected} />
                    <Redirect exact from="/search" to="/" />
                    <Route
                        path="/movie/:id"
                        component={filmDetailsPageContainerConnected}
                    />
                    <Route
                        path="/search/:query"
                        component={HomeContainerConnected}
                    />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default hot(App);
