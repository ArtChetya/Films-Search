import { connect } from 'react-redux';
import { AppState } from '../../configureStore';

const mapStateToProps = ({ searchParams: { search, searchBy } }: AppState) => ({
    search,
    searchBy
});

export const searchParamsConnector = connect(mapStateToProps);
