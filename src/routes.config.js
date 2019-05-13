import { homeConnector } from './pages/Home/HomeConnector';
import { HomeContainer } from './pages/Home/HomeContainer';
import { filmDetailsPageConnector } from './pages/FilmDetailsPage/FilmDetailsPageConnector';
import { FilmDetailsPageContainer } from './pages/FilmDetailsPage/FilmDetailsPageContainer';
import { NotFound } from './pages/NotFound';

const HomeContainerConnected = homeConnector(HomeContainer);
const filmDetailsPageContainerConnected = filmDetailsPageConnector(
    FilmDetailsPageContainer
);

export const routes = [
    {
        path: '/',
        component: HomeContainerConnected,
        exact: true
    },
    {
        path: '/movie/:id',
        component: filmDetailsPageContainerConnected
    },
    {
        path: '/search/:query',
        component: HomeContainerConnected,
        exact: true
    },
    {
        path: '*',
        component: NotFound,
        exact: true
    }
];
