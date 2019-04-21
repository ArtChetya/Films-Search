import { connect } from 'react-redux';

const mapStateToProps = ({ searchParams: { search, searchBy } }) => ({
    search,
    searchBy
});

export const searchParamsConnector = connect(mapStateToProps);
