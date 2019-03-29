import { shallow, mount } from 'enzyme/build';
import React from 'react';
import pink from '@material-ui/core/colors/pink';
import { ColorButton } from '..';

describe('ColorButton component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<ColorButton>Test</ColorButton>);
        expect(component).toMatchSnapshot();
    });

    it('should use default font and background colors', () => {
        const defaultFontColor = pink[400];
        const defaultBackColor = '#fff';
        const component = mount(<ColorButton>Test</ColorButton>);

        expect(component).toHaveStyleRule('color', defaultFontColor, {
            modifier: '&&'
        });

        expect(component).toHaveStyleRule(
            'background-color',
            defaultBackColor,
            {
                modifier: '&&'
            }
        );
    });

    it('should properly add font color', () => {
        const color = '#000';
        const component = mount(
            <ColorButton fontcolor={color}>Test</ColorButton>
        );

        expect(component).toHaveStyleRule('color', color, {
            modifier: '&&'
        });
    });

    it('should properly add background color', () => {
        const color = '#000';
        const component = mount(
            <ColorButton backgroundcolor={color}>Test</ColorButton>
        );

        expect(component).toHaveStyleRule('background-color', color, {
            modifier: '&&'
        });
    });
});
