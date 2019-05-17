import { ErrorBoundary } from 'components';
import React, { ElementType, FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { StaticRouterContext } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { filmDetailsPageConnector } from './pages/FilmDetailsPage/FilmDetailsPageConnector';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';
import { homeConnector } from './pages/Home/HomeConnector';
import { HomeContainer } from './pages/Home/HomeContainer';
import { NotFound } from './pages/NotFound';

const HomeContainerConnected = homeConnector(HomeContainer);
const filmDetailsPageContainerConnected = filmDetailsPageConnector(
    FilmDetailsPageContainer
);

interface IAppProps {
    Router: ElementType;
    location?: string | object;
    context?: StaticRouterContext;
    store: any;
}

const App: FunctionComponent<IAppProps> = ({
    Router,
    location,
    context,
    store
}) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router location={location} context={context}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={HomeContainerConnected}
                        />
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
                </Router>
            </ErrorBoundary>
        </Provider>
    );
};

export default hot(App);
