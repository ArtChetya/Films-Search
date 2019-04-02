import { shallow } from 'enzyme/build';
import React from 'react';
import { Link } from '..';

describe('Link component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Link />);
        expect(component).toMatchSnapshot();
    });
});
