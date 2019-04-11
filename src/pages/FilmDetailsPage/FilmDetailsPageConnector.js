import { connect } from 'react-redux';
import { params } from 'features/searchParams';
import { fetchFilms } from 'features/films';
import { fetchFilmDetailsInfo } from 'features/filmDetails';

const mapStateToProps = ({
    searchParams,
    filmDetailsInfo: { filmDetails, isFilmDetailsLoading },
    filmsInfo: { isFilmsLoading }
}) => ({
    params: searchParams,
    isFilmDetailsLoading,
    filmDetails,
    isFilmsLoading
});

const mapDispatchToProps = dispatch => ({
    fetchFilmDetailsInfo: filmId => dispatch(fetchFilmDetailsInfo(filmId)),
    fetchFilms: fetchParams => dispatch(fetchFilms(fetchParams)),
    setParams: data => dispatch(params(data))
});

export const filmDetailsPageConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
