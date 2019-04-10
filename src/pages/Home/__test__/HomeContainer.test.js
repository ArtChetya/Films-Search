import { shallow } from 'enzyme/build';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { httpService } from '../../../services';
import { HomeContainer } from '../HomeContainer';

jest.mock('../../../services/httpService');

describe('HomeContainer component', () => {
    let films;
    let container;
    let params;

    beforeAll(() => {
        films = [
            {
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
            },
            {
                id: 371638,
                title: 'The Disaster Artist',
                tagline: 'I did naaaht! Oh, hi Mark',
                vote_average: 7.2,
                vote_count: 808,
                release_date: '2017-11-30',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/jj84nF5vYRD0HUTowBKcrKk8hZP.jpg',
                overview:
                    'An aspiring actor in Hollywood meets an enigmatic stranger by the name of Tommy Wiseau',
                budget: 10000000,
                revenue: 27129350,
                genres: ['Comedy', 'Drama', 'History'],
                runtime: 104
            },
            {
                id: 464593,
                title: 'Earth: One Amazing Day',
                tagline: 'One day. One planet. Infinite wonder.',
                vote_average: 7.8,
                vote_count: 9,
                release_date: '2017-08-04',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/7OKStVtpeptnfIgxXEyQubMMTey.jpg',
                overview:
                    'An astonishing journey revealing the awesome power of the natural world.',
                budget: 0,
                revenue: 0,
                genres: ['Documentary'],
                runtime: 95
            }
        ];
        httpService.mockResolvedValue({ data: films });
        params = {
            search: undefined,
            searchBy: 'title',
            sortBy: 'release_date',
            sortOrder: 'desc',
            limit: 50
        };
    });

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('should be rendered correctly', () => {
        const component = shallow(<HomeContainer />);

        expect(component).toMatchSnapshot();
    });

    it('should fetch films', () => {
        // Test first render and effect
        act(() => {
            ReactDOM.render(<HomeContainer />, container);
        });

        expect(httpService).toHaveBeenCalledWith({
            params,
            method: 'GET',
            url: 'movies'
        });
    });
});
