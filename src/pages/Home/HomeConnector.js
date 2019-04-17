import { connect } from 'react-redux';
import { params, sortBy } from 'features/searchParams';
import { fetchFilms } from 'features/films';

const mapStateToProps = ({ searchParams, filmsInfo: { isFilmsLoading } }) => ({
    sortBy: searchParams.sortBy,
    params: searchParams,
    isFilmsLoading
});

const mapDispatchToProps = dispatch => ({
    setSortBy: id => dispatch(sortBy(id)),
    fetchFilms: () => dispatch(fetchFilms()),
    setParams: data => dispatch(params(data))
});

export const homeConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
