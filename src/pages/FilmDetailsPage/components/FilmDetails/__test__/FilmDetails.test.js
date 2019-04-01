import { shallow } from 'enzyme/build';
import React from 'react';
import { FilmDetails } from '..';

describe('FilmDetails component', () => {
    let filmDetails;

    beforeAll(() => {
        filmDetails = {
            id: 68718,
            title: 'Django Unchained',
            tagline: 'Life, liberty and the pursuit of vengeance.',
            vote_average: 7.9,
            vote_count: 12144,
            release_date: '2012-12-25',
            poster_path:
                'https://image.tmdb.org/t/p/w500/5WJnxuw41sddupf8cwOxYftuvJG.jpg',
            overview:
                'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
            budget: 100000000,
            revenue: 425368238,
            genres: ['Drama', 'Western'],
            runtime: 165
        };
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDetails filmDetails={filmDetails} />);
        expect(component).toMatchSnapshot();
    });
});
