import { connect } from 'react-redux';
import { params, sortBy } from 'features/searchParams';
import { fetchFilmsIfNeeded } from 'features/films';

const mapStateToProps = ({ searchParams, filmsInfo: { isFilmsLoading } }) => ({
    sortBy: searchParams.sortBy,
    isFilmsLoading
});

const mapDispatchToProps = dispatch => ({
    setSortBy: id => dispatch(sortBy(id)),
    fetchFilmsIfNeeded: () => dispatch(fetchFilmsIfNeeded()),
    setParams: data => dispatch(params(data))
});

export const homeConnector = connect(
    mapStateToProps,
    mapDispatchToProps
);
