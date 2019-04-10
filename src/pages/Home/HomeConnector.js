import { connect } from 'react-redux';
import { params, sortBy } from 'features/searchParams';
import { fetchFilms } from 'features/films';

const mapStateToProps = ({ filmsInfo, searchParams }) => ({
    sortBy: searchParams.sortBy,
    params: searchParams,
    isFilmsLoading: filmsInfo.isFilmsLoading
});

const mapDispatchToProps = dispatch => ({
    setSortBy: id => dispatch(sortBy(id)),
    fetchFilms: fetchParams => dispatch(fetchFilms(fetchParams)),
    setParams: data => dispatch(params(data))
});

export const homeConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
