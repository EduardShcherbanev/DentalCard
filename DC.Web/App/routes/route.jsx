import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router";
import Home from "../containers/home/home.jsx";
import Contacts from "../containers/contacts/contacts.jsx";
import About from "../containers/about/about.jsx";
import Portfolio from "../containers/portfolio/portfolio.jsx";
import Services from "../containers/services/services.jsx";
import Diagnostics from "../containers/services/serviceDiagnostics.jsx";
import Therapy from "../containers/services/serviceTherapy.jsx";
import Orthopedics from "../containers/services/serviceOrthopedics.jsx";
import Surgery from "../containers/services/serviceSurgery.jsx";
import Implantology from "../containers/services/serviceImplantology.jsx";
import Gnathology from "../containers/services/serviceGnathology.jsx";

export default class Routing extends React.Component {

    render() {
        return (
            <div className="container body-content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/services/diagnostics" component={Diagnostics} />
                    <Route exact path="/services/therapy" component={Therapy} />
                    <Route exact path="/services/orthopedics" component={Orthopedics} />
                    <Route exact path="/services/surgery" component={Surgery} />
                    <Route exact path="/services/implantology" component={Implantology} />
                    <Route exact path="/services/gnathology" component={Gnathology} />
                </Switch>
            </div>
        );
    }
};
