import { shallow } from 'enzyme/build';
import React from 'react';
import { ColorButton } from '..';

describe('ColorButton component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<ColorButton />);
        expect(component).toMatchSnapshot();
    });
});
