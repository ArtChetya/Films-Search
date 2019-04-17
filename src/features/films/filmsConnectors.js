import { connect } from 'react-redux';

const mapStateToProps = ({ filmsInfo: { films } }) => ({
    films
});

export const filmsConnector = connect(mapStateToProps);
