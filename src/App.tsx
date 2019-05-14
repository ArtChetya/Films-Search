import * as React from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Route, Switch, Redirect, RouterChildContext } from 'react-router-dom';
import { Provider } from 'react-redux';
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

// App.propTypes = {
//     Router: PropTypes.func.isRequired,
//     location: PropTypes.string,
//     context: PropTypes.shape({
//         url: PropTypes.string
//     }),
//     store: PropTypes.shape({
//         dispatch: PropTypes.func.isRequired,
//         getState: PropTypes.func.isRequired
//     }).isRequired
// };
// App.defaultProps = {
//     location: null,
//     context: null
// };

interface Props {
    Router: React.ElementType,
    location?: Location,
    context?: RouterChildContext,
    store: any
}

function App({ Router, location, context, store }: Props) {
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
}

export default hot(App);
