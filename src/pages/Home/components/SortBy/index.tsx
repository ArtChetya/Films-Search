import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import React, { FunctionComponent } from 'react';
import { IFilterConfig, IOption } from '../../types';
import { FilterBy } from '../FilterBy';

interface ISortByProps {
    options: IOption[];
    selectedOptionId: string;
    onOptionChange: (id: string) => void;
}

export const SortBy: FunctionComponent<ISortByProps> = props => {
    const sortByConfig: IFilterConfig = {
        title: 'Sort by',
        titleVariant: 'subtitle2',
        activeColor: pink[400],
        defaultColor: grey[700],
        activeBgColor: 'transparent',
        defaultBgColor: 'transparent',
        titleTextTransform: 'none',
        buttonTextTransform: 'lowercase',
        buttonVariant: 'text'
    };

    return <FilterBy {...props} config={sortByConfig} />;
};
