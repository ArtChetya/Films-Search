import { connect } from 'react-redux';
import { params } from 'features/searchParams';
import { fetchFilmDetailsInfo, clearFilmDetails } from 'features/filmDetails';

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
    setParams: data => dispatch(params(data)),
    clearFilmDetails: () => dispatch(clearFilmDetails)
});

export const filmDetailsPageConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
