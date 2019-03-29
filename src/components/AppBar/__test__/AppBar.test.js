import { shallow } from 'enzyme/build';
import React from 'react';
import { AppBar } from '..';

describe('AppBar component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(
            <AppBar>
                <div>Test</div>
            </AppBar>
        );
        expect(component).toMatchSnapshot();
    });
});
