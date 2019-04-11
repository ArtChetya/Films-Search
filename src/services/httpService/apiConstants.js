export const API_CONSTANTS = {
    FILMS: {
        method: 'GET',
        url: 'movies'
    },
    FILM_DETAILS: filmId => ({
        method: 'GET',
        url: `movies/${filmId}`
    })
};
