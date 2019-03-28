import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { PageGrid } from '../../components/PageGrid';
import { Header } from '../../components/Header';
import { SplitPane } from '../../components/SplitPane';
import { ColorText } from '../../components/ColorText';
import { PageContentWrapper } from '../../components/PageContentWrapper';
import { Footer } from '../../components/Footer';
import { FilmsList } from '../../components/FilmsList';
import { FilmDetails } from './components/FilmDetails';
import { Loader } from '../../components/Loader';

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
