import React, { Component, ErrorInfo, ReactNode } from 'react';
import styledComponents from 'styled-components';

const Details = styledComponents.details`
    && {
        white-space: pre-wrap;
    }
`;

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    public componentDidCatch(error: Error | null, errorInfo: ErrorInfo | null) {
        this.setState({
            error,
            errorInfo
        });
    }

    public render() {
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
