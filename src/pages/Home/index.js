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
import { filmsConnector } from 'features/films';
import { searchParamsConnector } from 'features/searchParams';
import { SearchForm, SortBy, FilmsFound } from './components';

const FilmsListConnected = filmsConnector(FilmsList);
const FilmsFoundConnected = filmsConnector(FilmsFound);
const SearchFormConnected = searchParamsConnector(SearchForm);

export const Home = ({
    sortByOptions,
    sortById,
    setSortById,
    onSearch,
    isLoading
}) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header content={<SearchFormConnected onSearch={onSearch} />} />

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
