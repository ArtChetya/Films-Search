import { shallow } from 'enzyme/build';
import React from 'react';
import { NotFound } from '..';

describe('NotFound component', () => {
    let location;

    beforeAll(() => {
        location = {
            pathname: 'pathname'
        };
    });

    it('should be rendered correctly', () => {
        const component = shallow(<NotFound location={location} />);
        expect(component).toMatchSnapshot();
    });
});
