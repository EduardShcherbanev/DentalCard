import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header/header.jsx";
import { BrowserRouter } from 'react-router-dom';
import Routing from '../routes/route.jsx';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Routing />
                </div>
            </BrowserRouter>
        );
    }
};