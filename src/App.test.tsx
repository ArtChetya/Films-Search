import * as enzyme from 'enzyme';
import * as React from 'react';
import App from './App';

describe('App component', () => {
    it('should be rendered correctly', () => {
        const Router = () => <div>Router</div>;
        const location = 'some-location';
        const context = { url: 'some-url' };
        const store = {
            dispatch: jest.fn(),
            getState: jest.fn(),
            subscribe: jest.fn()
        };

        const component = enzyme.shallow(
            <App
                Router={Router}
                location={location}
                context={context}
                store={store}
            />
        );
        expect(component).toMatchSnapshot();
    });
});
