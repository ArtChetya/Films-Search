import { connect } from 'react-redux';
import { params } from 'features/searchParams';
import {
    fetchFilmDetailsInfoIfNeeded,
    clearFilmDetails
} from 'features/filmDetails';

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
    fetchFilmDetailsInfoIfNeeded: filmId =>
        dispatch(fetchFilmDetailsInfoIfNeeded(filmId)),
    setParams: data => dispatch(params(data)),
    clearFilmDetails: () => dispatch(clearFilmDetails)
});

export const filmDetailsPageConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
