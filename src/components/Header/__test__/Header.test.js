import { shallow } from 'enzyme/build';
import React from 'react';
import { Header } from '..';

describe('Header component', () => {
    it('should be rendered correctly without props', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly with hasSearch prop', () => {
        const component = shallow(<Header hasSearch />);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly with content prop', () => {
        const component = shallow(<Header content={<div>Test</div>} />);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly with hasSearch and content prop', () => {
        const component = shallow(
            <Header hasSearch content={<div>Test</div>} />
        );
        expect(component).toMatchSnapshot();
    });
});
