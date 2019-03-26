import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SearchForm } from './components/SearchForm';
import { PageContentWrapper } from '../../components/PageContentWrapper';
import { SplitPane } from '../../components/SplitPane';
import { PageGrid } from '../../components/PageGrid';
import { ColorText } from '../../components/ColorText';
import { SortBy } from './components/SortBy';
import { FilmsSectionContainer } from '../../containers/FilmsSectionContainer';

export const Home = ({
    searchField,
    setSearchField,
    searchByOptions,
    searchById,
    setSearchById,
    sortByOptions,
    sortById,
    setSortById,
    filmsTotal,
    setFilmsTotal,
    onSearch,
    updatedSearchForm
}) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header
                content={
                    <SearchForm
                        searchField={searchField}
                        setSearchField={setSearchField}
                        searchByOptions={searchByOptions}
                        searchById={searchById}
                        setSearchById={setSearchById}
                        onSearch={onSearch}
                    />
                }
            />

            <SplitPane
                left={
                    <ColorText variant="subtitle2" fontcolor={grey[900]}>
                        {filmsTotal} movies found
                    </ColorText>
                }
                right={
                    <SortBy
                        options={sortByOptions}
                        selectedOptionId={sortById}
                        onOptionChange={setSortById}
                    />
                }
            />

            <PageContentWrapper>
                <FilmsSectionContainer
                    setFilmsTotal={setFilmsTotal}
                    searchField={searchField}
                    searchBy={searchById}
                    sortBy={sortById}
                    updated={updatedSearchForm}
                />
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};

Home.propTypes = {
    searchField: PropTypes.string.isRequired,
    setSearchField: PropTypes.func.isRequired,
    searchByOptions: PropTypes.array.isRequired,
    searchById: PropTypes.string.isRequired,
    setSearchById: PropTypes.func.isRequired,
    sortByOptions: PropTypes.array.isRequired,
    sortById: PropTypes.string.isRequired,
    setSortById: PropTypes.func.isRequired,
    filmsTotal: PropTypes.number.isRequired,
    setFilmsTotal: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    updatedSearchForm: PropTypes.bool.isRequired
};
