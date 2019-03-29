import { shallow } from 'enzyme/build';
import React from 'react';
import { ErrorBoundary } from '..';

describe('ErrorBoundary component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(
            <ErrorBoundary>
                <div>Test</div>
            </ErrorBoundary>
        );
        expect(component).toMatchSnapshot();
    });
});
