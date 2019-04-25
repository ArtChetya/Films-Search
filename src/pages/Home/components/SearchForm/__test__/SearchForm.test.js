import { mount, shallow } from 'enzyme/build';
import React from 'react';
import { SearchForm } from '..';

describe('SearchForm component', () => {
    let search;
    let searchBy;
    let onSearch;

    beforeAll(() => {
        search = '';
        searchBy = 'title';
        onSearch = jest.fn();
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <SearchForm
                search={search}
                searchBy={searchBy}
                onSearch={onSearch}
            />
        );
        expect(component).toMatchSnapshot();
    });

    it('should change value of input on change', () => {
        const expectedValue = 'someValue';
        const component = mount(
            <SearchForm
                search={search}
                searchBy={searchBy}
                onSearch={onSearch}
            />
        );

        component.find('input').simulate('change', {
            target: { value: expectedValue }
        });

        expect(component.find('input').props().value).toEqual(expectedValue);
    });

    it('should call onSearch of form submit', () => {
        const component = mount(
            <SearchForm
                search={search}
                searchBy={searchBy}
                onSearch={onSearch}
            />
        );
        component.find('form').simulate('submit');

        expect(onSearch).toHaveBeenCalled();
    });
});
