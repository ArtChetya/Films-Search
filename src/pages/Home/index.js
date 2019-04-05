import React from 'react';
import PropTypes from 'prop-types';
import {
    Header,
    Footer,
    SplitPane,
    PageGrid,
    FilmsList,
    Loader,
    PageContentWrapper
} from 'components';
import { SearchForm } from './components/SearchForm';
import { SortBy } from './components/SortBy';
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
