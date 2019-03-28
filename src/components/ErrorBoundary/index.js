import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Details = styled.details`
    && {
        white-space: pre-wrap;
    }
`;

export class ErrorBoundary extends React.Component {
    state = { error: null, errorInfo: null };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children } = this.props;

        if (errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <Details>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </Details>
                </div>
            );
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};
