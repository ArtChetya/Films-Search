import {
    FilmsList,
    Footer,
    Header,
    Loader,
    PageContentWrapper,
    PageGrid,
    SplitPane
} from 'components';
import { filmsConnector } from 'features/films';
import { searchParamsConnector } from 'features/searchParams';
import React, { FunctionComponent } from 'react';
import { FilmsFound, SearchForm, SortBy } from './components';
import { IOption } from './types';

const FilmsListConnected = filmsConnector(FilmsList);
const FilmsFoundConnected = filmsConnector(FilmsFound);
const SearchFormConnected = searchParamsConnector(SearchForm);

interface IHomeProps {
    sortByOptions: IOption[];
    sortById: string;
    setSortById: (id: string) => void;
    onSearch: (searchField: string, searchById: string) => void;
    isLoading: boolean;
}

export const Home: FunctionComponent<IHomeProps> = ({
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
