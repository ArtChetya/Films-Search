export const API_CONSTANTS = {
    FILMS: {
        method: 'GET',
        url: 'movies'
    },
    FILM_DETAILS: (filmId: number | string) => ({
        method: 'GET',
        url: `movies/${filmId}`
    })
};
