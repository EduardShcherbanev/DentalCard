import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/home/home.jsx';
import Contacts from '../containers/contacts/contacts.jsx';
import About from '../containers/about/about.jsx';
import Portfolio from '../containers/portfolio/portfolio.jsx';
import Services from '../containers/services/services.jsx';

export default class Routing extends React.Component {

    render() {
        return (
            <div className="container body-content">
                <main>
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/services" component={Services} />
                    </Switch>
                </main>
            </div>
        );
    }
};
