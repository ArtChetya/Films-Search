import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SearchForm } from './components/SearchForm';
import { PageContentWrapper } from '../../components/PageContentWrapper';
import { SplitPane } from '../../components/SplitPane';
import { PageGrid } from '../../components/PageGrid';
import { SortBy } from './components/SortBy';
import { FilmsList } from '../../components/FilmsList';
import { Loader } from '../../components/Loader';
import { FilmsFound } from './components/FilmsFound';
import { filmsConnector } from '../../features/films';

const FilmsListConnected = filmsConnector(FilmsList);
const FilmsFoundConnected = filmsConnector(FilmsFound);

export const Home = ({
    sortByOptions,
    sortById,
    setSortById,
    onSearch,
    isLoading
}) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header content={<SearchForm onSearch={onSearch} />} />

            <SplitPane
                left={<FilmsFoundConnected />}
                right={
                    <SortBy
                        options={sortByOptions}
                        selectedOptionId={sortById}
                        onOptionChange={setSortById}
                    />
                }
            />

            <PageContentWrapper>
                {isLoading ? <Loader /> : <FilmsListConnected />}
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};

Home.propTypes = {
    sortByOptions: PropTypes.array.isRequired,
    sortById: PropTypes.string.isRequired,
    setSortById: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};
