import { fetchFilms } from 'features/films';
import {
    ISearchParamsState,
    params as paramsAction
} from 'features/searchParams';
import { serverSideRenderedFlag } from 'features/serverSideRendered';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { queryToParams } from 'utils';
import { Home } from '.';
import { IHomePageDispatchProps, IHomePageStateProps } from './HomeConnector';
import { IOption } from './types';

interface IParams {
    query: string;
}

interface IHomeContainerProps
    extends RouteComponentProps<IParams>,
        IHomePageStateProps,
        IHomePageDispatchProps {}

export const HomeContainer: FunctionComponent<IHomeContainerProps> & {
    onInit: (store: any, match: any) => any;
} = ({
    match,
    history,
    sortBy,
    setSortBy,
    fetchFilmsIfNeeded,
    setParams,
    isFilmsLoading
}) => {
    const sortByOptionsList: IOption[] = [
        { id: 'release_date', label: 'release date' },
        { id: 'vote_average', label: 'rating' }
    ];
    const [sortByOptions] = useState<IOption[]>(sortByOptionsList);

    const onSearch = (search: string, searchBy: string) => {
        const isByTitleSearch = searchBy === 'title';

        const searchVal = isByTitleSearch ? search : search.split(' ')[0];

        history.push(
            encodeURI(
                `/search/search=${searchVal} searchBy=${searchBy} sortBy=${sortBy}`
            )
        );
    };

    const onSort = (id: string) => {
        if (id !== sortBy) {
            setSortBy(id);
            fetchFilmsIfNeeded();
        }
    };

    useEffect(() => {
        const queryParams = queryToParams(match.params.query);

        const defaultParams = {
            search: '',
            searchBy: 'title',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };

        setParams({
            ...defaultParams,
            ...queryParams
        });

        fetchFilmsIfNeeded();
    }, [setParams, fetchFilmsIfNeeded, match.params.query]);

    return (
        <Home
            sortByOptions={sortByOptions}
            sortById={sortBy}
            setSortById={onSort}
            onSearch={onSearch}
            isLoading={isFilmsLoading}
        />
    );
};

HomeContainer.onInit = (store, match) => {
    const queryParams = queryToParams(decodeURI(match.params.query));
    const defaultParams: ISearchParamsState = {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder: 'desc',
        limit: 50
    };

    store.dispatch(
        paramsAction({
            ...defaultParams,
            ...queryParams
        })
    );

    store.dispatch(serverSideRenderedFlag(true));

    return store.dispatch(fetchFilms());
};
