import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export const ColorText = styled(Typography)`
    && {
        color: ${props => props.fontcolor || '#fff'};
    }
`;

ColorText.propTypes = {
    fontcolor: PropTypes.string
};
