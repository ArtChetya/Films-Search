import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import React, { FunctionComponent } from 'react';
import { IFilterConfig, IOption } from '../../types';
import { FilterBy } from '../FilterBy';

interface ISearchByProps {
    options: IOption[];
    selectedOptionId: string;
    onOptionChange: (id: string) => void;
}

export const SearchBy: FunctionComponent<ISearchByProps> = props => {
    const searchByConfig: IFilterConfig = {
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

    return <FilterBy {...props} config={searchByConfig} />;
};
