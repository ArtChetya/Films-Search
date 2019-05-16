import { filmDetailsInfo } from 'features/filmDetails';
import { filmsInfo } from 'features/films';
import { searchParams } from 'features/searchParams';
import { serverSideRenderedFlagReducer } from 'features/serverSideRendered';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    searchParams,
    filmsInfo,
    filmDetailsInfo,
    serverSideRenderedFlag: serverSideRenderedFlagReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers =
    (typeof window !== 'undefined' &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const configureStore = (initialState: AppState) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxThunk))
    );
};
