import { shallow } from 'enzyme/build';
import React from 'react';
import { PageGrid } from '..';

describe('PageGrid component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<PageGrid />);
        expect(component).toMatchSnapshot();
    });
});
