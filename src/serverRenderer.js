import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { SheetsRegistry } from 'jss';
import { ServerStyleSheet } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName
} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { configureStore } from './configureStore';
import App from './App';
import { routes } from './routes.config';

/* eslint-disable */
function renderHTML(html, css, styles, preloadedState) {
    return `
        <!doctype html>
        <html lang="en" style="height: 100%;">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
            <title>Films Search</title>
            <style id="jss-server-side">${css}</style>
            ${styles}
        </head>
        <body style="margin: 0; height: 100%;">
            <div id="app">${html}</div>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
                /</g,
                '\\u003c'
            )}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
  `;
}
/* eslint-enable */

export default function serverRenderer() {
    return async (req, res) => {
        const sheetsRegistry = new SheetsRegistry();
        const sheetsManager = new Map();
        const theme = createMuiTheme({
            palette: {
                primary: indigo,
                secondary: pink,
                error: red,
                contrastThreshold: 3,
                tonalOffset: 0.2
            }
        });
        const generateClassName = createGenerateClassName();
        const sheet = new ServerStyleSheet();
        const store = configureStore();
        const context = {};

        const dataRequirements = matchRoutes(routes, req.url).map(
            ({ route, match }) => {
                const { onInit } = route.component;

                return onInit instanceof Function
                    ? onInit(store, match)
                    : Promise.resolve(null);
            }
        );

        await Promise.all(dataRequirements);

        const renderRoot = () =>
            sheet.collectStyles(
                <JssProvider
                    registry={sheetsRegistry}
                    generateClassName={generateClassName}
                >
                    <MuiThemeProvider
                        theme={theme}
                        sheetsManager={sheetsManager}
                    >
                        <App
                            context={context}
                            location={req.url}
                            Router={StaticRouter}
                            store={store}
                        />
                    </MuiThemeProvider>
                </JssProvider>
            );

        console.log(context);
        if (context.url) {
            res.writeHead(302, {
                Location: context.url
            });
            res.end();
            return;
        }

        let html;
        let styles;

        try {
            html = renderToString(renderRoot());
            styles = sheet.getStyleTags();
        } catch (error) {
            // handle error
            console.error(error);
        } finally {
            sheet.seal();
        }

        const css = sheetsRegistry.toString();
        const preloadedState = store.getState();

        res.send(renderHTML(html, css, styles, preloadedState));
    };
}
