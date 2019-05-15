import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from './configureStore';

// @ts-ignore
const store = configureStore(window.PRELOADED_STATE);

hydrate(
    <App Router={BrowserRouter} store={store} />,
    document.getElementById('app')
);
