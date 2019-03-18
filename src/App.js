import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import 'typeface-roboto';
import styled from 'styled-components';
import './App.css';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <StyledButton variant="contained" color="primary">
                    Hello World
                </StyledButton>
            </div>
        );
    }
}

export default hot(App);
