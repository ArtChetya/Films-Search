import { shallow } from 'enzyme/build';
import React from 'react';
import { ColorText } from '..';

describe('ColorText component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<ColorText />);
        expect(component).toMatchSnapshot();
    });
});
