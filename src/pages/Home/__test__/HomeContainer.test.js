import { shallow } from 'enzyme/build';
import React from 'react';
import { HomeContainer } from '../HomeContainer';

jest.mock('../../../services/httpService');

describe('HomeContainer component', () => {
    let match;
    let history;
    let sortBy;
    let setSortBy;
    let fetchFilms;
    let params;
    let setParams;
    let isFilmsLoading;

    beforeAll(() => {
        match = {
            params: { query: '' }
        };

        history = {
            push: jest.fn
        };

        sortBy = 'release_date';

        setSortBy = jest.fn();

        fetchFilms = jest.fn();

        params = {
            search: undefined,
            searchBy: 'title',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };

        setParams = jest.fn();

        isFilmsLoading = false;
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <HomeContainer
                match={match}
                history={history}
                sortBy={sortBy}
                setSortBy={setSortBy}
                fetchFilms={fetchFilms}
                params={params}
                setParams={setParams}
                isFilmsLoading={isFilmsLoading}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
