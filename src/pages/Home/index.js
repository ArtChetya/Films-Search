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
import { FilmsList } from '../../components/FilmsList';
import { Loader } from '../../components/Loader';

export const Home = ({
    search,
    setSearch,
    searchByOptions,
    searchById,
    setSearchById,
    sortByOptions,
    sortById,
    setSortById,
    films,
    onSearch,
    isLoading
}) => {
    return (
        <PageGrid container direction="column" wrap="nowrap">
            <Header
                content={
                    <SearchForm
                        search={search}
                        setSearch={setSearch}
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
                        {films.length} movies found
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
                {isLoading ? <Loader /> : <FilmsList films={films} />}
            </PageContentWrapper>

            <Footer />
        </PageGrid>
    );
};

Home.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    searchByOptions: PropTypes.array.isRequired,
    searchById: PropTypes.string.isRequired,
    setSearchById: PropTypes.func.isRequired,
    sortByOptions: PropTypes.array.isRequired,
    sortById: PropTypes.string.isRequired,
    setSortById: PropTypes.func.isRequired,
    films: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};
