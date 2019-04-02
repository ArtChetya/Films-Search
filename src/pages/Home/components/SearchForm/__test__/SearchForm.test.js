import { mount, shallow } from 'enzyme/build';
import React from 'react';
import { SearchForm } from '..';

describe('SearchForm component', () => {
    let search;
    let setSearch;
    let searchByOptions;
    let searchById;
    let setSearchById;
    let onSearch;

    beforeAll(() => {
        search = '';

        setSearch = jest.fn();

        searchByOptions = [
            { id: 'title', label: 'Title' },
            { id: 'genres', label: 'Genre' }
        ];

        searchById = 'title';

        setSearchById = jest.fn();

        onSearch = jest.fn();
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <SearchForm
                search={search}
                setSearch={setSearch}
                searchByOptions={searchByOptions}
                searchById={searchById}
                setSearchById={setSearchById}
                onSearch={onSearch}
            />
        );
        expect(component).toMatchSnapshot();
    });

    it('should call setSearch on text input change', () => {
        const component = mount(
            <SearchForm
                search={search}
                setSearch={setSearch}
                searchByOptions={searchByOptions}
                searchById={searchById}
                setSearchById={setSearchById}
                onSearch={onSearch}
            />
        );

        component.find('input').simulate('change');

        expect(setSearch).toHaveBeenCalled();
    });

    it('should call onSearch of form submit', () => {
        const component = mount(
            <SearchForm
                search={search}
                setSearch={setSearch}
                searchByOptions={searchByOptions}
                searchById={searchById}
                setSearchById={setSearchById}
                onSearch={onSearch}
            />
        );
        component.find('form').simulate('submit');

        expect(onSearch).toHaveBeenCalled();
    });
});
