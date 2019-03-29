import { mount, shallow } from 'enzyme/build';
import React from 'react';
import { ColorText } from '..';

describe('ColorText component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<ColorText />);
        expect(component).toMatchSnapshot();
    });

    it('should use default font color', () => {
        const defaultFontColor = '#fff';
        const component = mount(<ColorText />);

        expect(component).toHaveStyleRule('color', defaultFontColor, {
            modifier: '&&'
        });
    });

    it('should properly add font color', () => {
        const color = '#000';
        const component = mount(<ColorText fontcolor={color} />);

        expect(component).toHaveStyleRule('color', color, {
            modifier: '&&'
        });
    });
});
