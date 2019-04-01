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

    it('should be rendered correctly when child have error', () => {
        const ComponentWithError = () => {
            throw new Error('Errored!');
        };

        const component = shallow(
            <ErrorBoundary>
                <ComponentWithError />
            </ErrorBoundary>
        );
        expect(component).toMatchSnapshot();
    });
});
