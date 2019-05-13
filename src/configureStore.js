import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchParams } from 'features/searchParams';
import { filmsInfo } from 'features/films';
import { filmDetailsInfo } from 'features/filmDetails';
import { serverSideRenderedFlagReducer } from 'features/serverSideRendered';

const rootReducer = combineReducers({
    searchParams,
    filmsInfo,
    filmDetailsInfo,
    serverSideRenderedFlag: serverSideRenderedFlagReducer
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
/* eslint-enable no-underscore-dangle */

export const configureStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
};
