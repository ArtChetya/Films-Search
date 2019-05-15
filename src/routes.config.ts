import { RouteConfig } from 'react-router-config';
import { filmDetailsPageConnector } from './pages/FilmDetailsPage/FilmDetailsPageConnector';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';
import { homeConnector } from './pages/Home/HomeConnector';
import { HomeContainer } from './pages/Home/HomeContainer';
import { NotFound } from './pages/NotFound';

const homeContainerConnected = homeConnector(HomeContainer);
const filmDetailsPageContainerConnected = filmDetailsPageConnector(
    FilmDetailsPageContainer
);

export const routes: RouteConfig[] = [
    {
        path: '/',
        component: homeContainerConnected,
        exact: true
    },
    {
        path: '/movie/:id',
        component: filmDetailsPageContainerConnected
    },
    {
        path: '/search/:query',
        component: homeContainerConnected,
        exact: true
    },
    {
        path: '*',
        component: NotFound,
        exact: true
    }
];
