import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { PageGrid } from '../../components/PageGrid';
import { Header } from '../../components/Header';
import { SplitPane } from '../../components/SplitPane';
import { ColorText } from '../../components/ColorText';
import { PageContentWrapper } from '../../components/PageContentWrapper';
import { FilmsSectionContainer } from '../../containers/FilmsSectionContainer';
import { Footer } from '../../components/Footer';
import { FilmDetailsContainer } from './containers/FilmDetailsContainer';

export const FilmDetailsPage = ({
    filmGenres,
    setFilmsGenres,
    filmId,
    updated,
    setUpdated
}) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header
                hasSearch
                content={
                    <FilmDetailsContainer
                        filmId={filmId}
                        setFilmsGenres={setFilmsGenres}
                        updated={updated}
                        setUpdated={setUpdated}
                    />
                }
            />

            <SplitPane
                left={
                    <ColorText variant="subtitle2" fontcolor={grey[900]}>
                        Films by <strong>{filmGenres.join(', ')}</strong>
                    </ColorText>
                }
            />

            <PageContentWrapper>
                <FilmsSectionContainer
                    searchField={filmGenres.join(' ')}
                    searchBy="genres"
                    updated={updated}
                />
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};

FilmDetailsPage.propTypes = {
    filmGenres: PropTypes.array.isRequired,
    setFilmsGenres: PropTypes.func.isRequired,
    filmId: PropTypes.string.isRequired,
    updated: PropTypes.bool.isRequired,
    setUpdated: PropTypes.func.isRequired
};
