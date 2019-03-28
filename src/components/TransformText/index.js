import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ColorText } from '../ColorText';

export const TransformText = styled(ColorText)`
    && {
        text-transform: ${props => props.transform || 'capitalize'};
    }
`;

TransformText.propTypes = {
    transform: PropTypes.string
};
