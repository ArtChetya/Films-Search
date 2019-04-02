import { shallow } from 'enzyme/build';
import React from 'react';
import { PageContentWrapper } from '..';

describe('PageContentWrapper component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<PageContentWrapper />);
        expect(component).toMatchSnapshot();
    });
});
