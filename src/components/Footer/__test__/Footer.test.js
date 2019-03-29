import { shallow } from 'enzyme/build';
import React from 'react';
import { Footer } from '..';

describe('Footer component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});
