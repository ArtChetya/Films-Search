import { shallow, mount } from 'enzyme/build';
import React from 'react';
import { FilterBy } from '..';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import { ColorButton } from 'components';

describe('FilterBy component', () => {
    let config;
    let options;
    let selectedOptionId;
    let onOptionChange;

    beforeAll(() => {
        config = {
            title: 'Search By',
            titleVariant: 'body1',
            activeColor: '#fff',
            defaultColor: '#fff',
            activeBgColor: pink[400],
            defaultBgColor: grey[700],
            titleTextTransform: 'uppercase',
            buttonTextTransform: 'uppercase',
            buttonVariant: 'outlined'
        };

        options = [
            { id: 'title', label: 'Title' },
            { id: 'genres', label: 'Genre' }
        ];

        selectedOptionId = 'title';

        onOptionChange = jest.fn();
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <FilterBy
                config={config}
                options={options}
                selectedOptionId={selectedOptionId}
                onOptionChange={onOptionChange}
            />
        );
        expect(component).toMatchSnapshot();
    });

    it('should call onOptionChange when option is changed', () => {
        const selectedId = options[options.length - 1].id;
        const component = mount(
            <FilterBy
                config={config}
                options={options}
                selectedOptionId={selectedOptionId}
                onOptionChange={onOptionChange}
            />
        );
        component
            .find(ColorButton)
            .last()
            .simulate('click');

        expect(onOptionChange).toHaveBeenCalledWith(selectedId);
    });
});
