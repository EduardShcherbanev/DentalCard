import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router";
import Home from "../containers/home/home.jsx";
import Contacts from "../containers/contacts/contacts.jsx";
import About from "../containers/about/about.jsx";
import Portfolio from "../containers/portfolio/portfolio.jsx";
import Services from "../containers/services/services.jsx";

import Diagnostics from "../containers/services/diagnostics/serviceDiagnostics.jsx";
import Panoramic from "../containers/services/diagnostics/serviceDiagnosticsPanoramic.jsx";
import Tomography from "../containers/services/diagnostics/serviceDiagnosticsTomography.jsx";
import Design from "../containers/services/diagnostics/serviceDiagnosticsDesign.jsx";
import Occlusion from "../containers/services/diagnostics/serviceDiagnosticsOcclusion.jsx";
import Axiography from "../containers/services/diagnostics/serviceDiagnosticsAxiography.jsx";

import Therapy from "../containers/services/serviceTherapy.jsx";
import Orthopedics from "../containers/services/serviceOrthopedics.jsx";
import Surgery from "../containers/services/serviceSurgery.jsx";
import Implantology from "../containers/services/serviceImplantology.jsx";
import Gnathology from "../containers/services/serviceGnathology.jsx";

import MultipleContent from "../components/multipleContent.jsx";

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
                    <Route exact path="/services/diagnostics/panoramic" component={Panoramic} />
                    <Route exact path="/services/diagnostics/tomography" component={Tomography} />
                    <Route exact path="/services/diagnostics/design" component={Design} />
                    <Route exact path="/services/diagnostics/occlusion" component={Occlusion} />
                    <Route exact path="/services/diagnostics/axiography" component={Axiography} />

                    <Route exact path="/services/therapy" component={Therapy} />
                    <Route exact path="/services/orthopedics" component={Orthopedics} />
                    <Route exact path="/services/surgery" component={Surgery} />
                    <Route exact path="/services/implantology" component={Implantology} />
                    <Route exact path="/services/gnathology" component={Gnathology} />

                    <Route exact path="/test" component={MultipleContent} />
                </Switch>
            </div>
        );
    }
};
