import { shallow } from 'enzyme/build';
import React from 'react';
import { FilmDetailsPageContainer } from '../FilmDetailsPageContainer';

jest.mock('../../../services/httpService');

describe('FilmDetailsPageContainer component', () => {
    let match;
    let history;
    let fetchFilmDetailsInfo;
    let isFilmDetailsLoading;
    let isFilmsLoading;
    let filmDetails;
    let setParams;
    let clearFilmDetails;

    beforeAll(() => {
        match = {
            params: { id: '1' }
        };

        history = {
            push: jest.fn
        };

        fetchFilmDetailsInfo = jest.fn();

        isFilmDetailsLoading = false;

        isFilmsLoading = false;

        filmDetails = {
            id: 181790,
            title: 'Journey 3: From the Earth to the Moon',
            tagline: '',
            vote_average: 0,
            vote_count: 7,
            release_date: '2018-12-31',
            poster_path:
                'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
            overview:
                'Sean and Hank go on their biggest adventure yet, to the moon.',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
            runtime: null
        };

        setParams = jest.fn();

        clearFilmDetails = jest.fn();
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <FilmDetailsPageContainer
                match={match}
                history={history}
                fetchFilmDetailsInfo={fetchFilmDetailsInfo}
                isFilmDetailsLoading={isFilmDetailsLoading}
                isFilmsLoading={isFilmsLoading}
                filmDetails={filmDetails}
                setParams={setParams}
                clearFilmDetails={clearFilmDetails}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
