import { shallow } from 'enzyme/build';
import React from 'react';
import App from './App';

describe('App component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});
