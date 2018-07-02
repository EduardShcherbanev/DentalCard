import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header/header.jsx";
import { BrowserRouter } from 'react-router-dom';
import Routing from '../routes/route.jsx';
import { Icon } from 'react-materialize'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Routing />

                    <footer>
                        <p>Врач-стоматолог ортопед, хирург, терапевт</p>
                        <p>Геворкян Диана Геворковна</p>
                        <p><a href="tel:+7 926 191-23-94"><Icon tiny>phone</Icon> +7 926 191-23-94</a></p>
                        <p><a href="mailto:fireshock2@gmail.com"><Icon tiny>email</Icon> fireshock2@gmail.com</a></p>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
};