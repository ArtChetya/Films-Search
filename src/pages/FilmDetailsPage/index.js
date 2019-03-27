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

export const FilmDetailsPage = ({ filmDetails, filmsByGenres }) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header
                hasSearch
                content={<FilmDetails filmDetails={filmDetails} />}
            />

            <SplitPane
                left={
                    <ColorText variant="subtitle2" fontcolor={grey[900]}>
                        Films by{' '}
                        <strong>{filmDetails.genres.join(', ')}</strong>
                    </ColorText>
                }
            />

            <PageContentWrapper>
                <FilmsList films={filmsByGenres} />
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};

FilmDetailsPage.propTypes = {
    filmDetails: PropTypes.object.isRequired,
    filmsByGenres: PropTypes.array.isRequired
};
