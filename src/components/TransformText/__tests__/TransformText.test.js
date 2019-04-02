import { mount, shallow } from 'enzyme/build';
import React from 'react';
import { TransformText } from '..';

describe('TransformText component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<TransformText>Test</TransformText>);
        expect(component).toMatchSnapshot();
    });

    it('should use default transform valeu', () => {
        const defaultTransform = 'capitalize';
        const component = mount(<TransformText />);

        expect(component).toHaveStyleRule('text-transform', defaultTransform, {
            modifier: '&&'
        });
    });

    it('should properly add transfom value', () => {
        const transform = 'lowercase';
        const component = mount(<TransformText transform={transform} />);

        expect(component).toHaveStyleRule('text-transform', transform, {
            modifier: '&&'
        });
    });
});
