import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SearchForm } from './components/SearchForm';
import { PageContentWrapper } from '../../components/PageContentWrapper';

export function Home({
    searchField,
    setSearchField,
    searchByLabels,
    selectedLabel,
    setSelectedLabel
}) {
    return (
        <>
            <Header
                content={
                    <SearchForm
                        searchField={searchField}
                        setSearchField={setSearchField}
                        searchByLabels={searchByLabels}
                        selectedLabel={selectedLabel}
                        setSelectedLabel={setSelectedLabel}
                        onSearch={event => {
                            event.preventDefault();
                            console.log(searchField);
                        }}
                    />
                }
            />

            <PageContentWrapper />

            <Footer />
        </>
    );
}

Home.propTypes = {
    searchField: PropTypes.string.isRequired,
    setSearchField: PropTypes.func.isRequired,
    searchByLabels: PropTypes.array.isRequired,
    selectedLabel: PropTypes.string.isRequired,
    setSelectedLabel: PropTypes.func.isRequired
};
