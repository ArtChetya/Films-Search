import { shallow } from 'enzyme/build';
import React from 'react';
import { SplitPane } from '..';

describe('SplitPane component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(
            <SplitPane left={<div>Test 1</div>} right={<div>Test 2</div>} />
        );
        expect(component).toMatchSnapshot();
    });
});
