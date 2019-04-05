import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import {
    PageGrid,
    Header,
    SplitPane,
    ColorText,
    PageContentWrapper,
    Footer,
    FilmsList,
    Loader
} from 'components';
import { FilmDetails } from './components/FilmDetails';

export const FilmDetailsPage = ({
    filmDetails,
    filmsByGenres,
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
                {isFilmsLoading ? (
                    <Loader />
                ) : (
                    <FilmsList films={filmsByGenres} />
                )}
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};

FilmDetailsPage.propTypes = {
    filmDetails: PropTypes.object.isRequired,
    filmsByGenres: PropTypes.array.isRequired,
    isFilmDetailsLoading: PropTypes.bool.isRequired,
    isFilmsLoading: PropTypes.bool.isRequired
};
