import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-materialize'

export default class ServiceCard extends React.Component {
    render() {
        return (
            <Card className="hoverable cardlink primary lighten-4" title={this.props.serviceName}>
                {this.props.serviceTasks.map(item => (<p key={item.name}>- {item.name}</p>))}
            </Card>
        );
    }
};