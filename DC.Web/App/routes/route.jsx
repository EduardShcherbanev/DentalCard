import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router";
import Contacts from "../containers/contacts/contacts.jsx";
import About from "../containers/about/about.jsx";
import Portfolio from "../containers/portfolio/portfolio.jsx";

import MultipleContent from "../containers/multipleContent/multipleContent.jsx";

export default class Routing extends React.Component {

    render() {
        return (
            <div className="container body-content">
                <Switch>
                    <Route exact path="/" component={MultipleContent} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route path="/services" component={MultipleContent} />
                </Switch>
            </div>
        );
    }
};
