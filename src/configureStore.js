import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchParams } from 'features/searchParams';
import { filmsInfo } from 'features/films';
import { filmDetailsInfo } from 'features/filmDetails';

const rootReducer = combineReducers({
    searchParams,
    filmsInfo,
    filmDetailsInfo
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
