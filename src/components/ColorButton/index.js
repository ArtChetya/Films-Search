import styled from 'styled-components';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import Button from '@material-ui/core/Button';

export const ColorButton = styled(Button)`
    && {
        color: ${props => props.fontcolor || pink[400]};
        background-color: ${props => props.backgroundcolor || '#fff'};

        :hover {
            opacity: 0.7;
            color: ${props => props.fontcolor || pink[400]};
            background-color: ${props => props.backgroundcolor || '#fff'};
        }
    }
`;

ColorButton.propTypes = {
    fontcolor: PropTypes.string,
    backgroundcolor: PropTypes.string
};
