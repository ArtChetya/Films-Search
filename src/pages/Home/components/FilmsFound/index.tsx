import grey from '@material-ui/core/colors/grey';
import { ColorText } from 'components';
import { IFilmDetails } from 'features/filmDetails';
import React, { FunctionComponent } from 'react';

interface IFilmsFound {
    films: IFilmDetails[];
}

export const FilmsFound: FunctionComponent<IFilmsFound> = ({ films }) => {
    return (
        <ColorText variant="subtitle2" fontcolor={grey[900]}>
            {films.length} movies found
        </ColorText>
    );
};
