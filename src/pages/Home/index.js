import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageContentWrapper } from '../../components/styled';

export function Home() {
    return (
        <>
            <Header hasSearch />

            <PageContentWrapper />

            <Footer />
        </>
    );
}
