import grey from '@material-ui/core/colors/grey';
import {
    ColorText,
    FilmsList,
    Footer,
    Header,
    Loader,
    PageContentWrapper,
    PageGrid,
    SplitPane
} from 'components';
import { IFilmDetails } from 'features/filmDetails';
import { filmsConnector } from 'features/films';
import React, { FunctionComponent } from 'react';
import { FilmDetails } from './components';

const FilmsListConnected = filmsConnector(FilmsList);

interface IFilmDetailsPageProps {
    filmDetails: IFilmDetails;
    isFilmDetailsLoading: boolean;
    isFilmsLoading: boolean;
}

export const FilmDetailsPage: FunctionComponent<IFilmDetailsPageProps> = ({
    filmDetails,
    isFilmDetailsLoading,
    isFilmsLoading
}) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header
                hasSearch
                content={
                    isFilmDetailsLoading ? (
                        <Loader />
                    ) : (
                        <FilmDetails filmDetails={filmDetails} />
                    )
                }
            />

            <SplitPane
                left={
                    isFilmDetailsLoading ? (
                        <Loader size="30px" />
                    ) : (
                        <ColorText variant="subtitle2" fontcolor={grey[900]}>
                            Films by{' '}
                            <strong>
                                {filmDetails.genres &&
                                    filmDetails.genres.join(', ')}
                            </strong>
                        </ColorText>
                    )
                }
            />

            <PageContentWrapper>
                {isFilmsLoading ? <Loader /> : <FilmsListConnected />}
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};
