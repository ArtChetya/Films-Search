import { shallow } from 'enzyme/build';
import React from 'react';
import { SearchBy } from '..';

describe('SearchBy component', () => {
    let options;
    let selectedOptionId;
    let onOptionChange;

    beforeAll(() => {
        options = [
            { id: 'title', label: 'Title' },
            { id: 'genres', label: 'Genre' }
        ];

        selectedOptionId = 'title';

        onOptionChange = jest.fn();
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <SearchBy
                options={options}
                selectedOptionId={selectedOptionId}
                onOptionChange={onOptionChange}
            />
        );
        expect(component).toMatchSnapshot();
    });
});
