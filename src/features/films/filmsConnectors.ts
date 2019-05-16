import { connect } from 'react-redux';
import { AppState } from '../../configureStore';

const mapStateToProps = ({ filmsInfo: { films } }: AppState) => ({
    films
});

export const filmsConnector = connect(mapStateToProps);
