import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SearchForm } from './components/SearchForm';
import { PageContentWrapper } from '../../components/PageContentWrapper';

export function Home() {
    return (
        <>
            <Header
                hasSearch
                content={
                    <SearchForm
                        onSearch={event => {
                            event.preventDefault();
                            console.log(event);
                        }}
                    />
                }
            />

            <PageContentWrapper />

            <Footer />
        </>
    );
}
