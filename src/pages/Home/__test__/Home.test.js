import { shallow } from 'enzyme/build';
import React from 'react';
import { Home } from '..';

describe('Home component', () => {
    let sortByOptions;
    let sortById;
    let setSortById;
    let onSearch;
    let isLoading;

    beforeAll(() => {
        sortByOptions = [
            { id: 'release_date', label: 'release date' },
            { id: 'vote_average', label: 'rating' }
        ];

        sortById = 'release_date';

        setSortById = jest.fn();

        onSearch = jest.fn();

        isLoading = false;
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <Home
                sortByOptions={sortByOptions}
                sortById={sortById}
                setSortById={setSortById}
                onSearch={onSearch}
                isLoading={isLoading}
            />
        );
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly with loading', () => {
        const component = shallow(
            <Home
                sortByOptions={sortByOptions}
                sortById={sortById}
                setSortById={setSortById}
                onSearch={onSearch}
                isLoading
            />
        );
        expect(component).toMatchSnapshot();
    });
});
