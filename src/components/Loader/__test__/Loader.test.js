import { shallow } from 'enzyme/build';
import React from 'react';
import { Loader } from '..';

describe('Loader component', () => {
    it('should be rendered correctly without props', () => {
        const component = shallow(<Loader />);
        expect(component).toMatchSnapshot();
    });
});
