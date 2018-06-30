import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle } from 'react-materialize';

export default class ServiceItemCard extends React.Component {
    render() {
        return (
            <Link to={this.props.to}>
                <Card header={<CardTitle image={this.props.image}>{this.props.name}</CardTitle>} className="hoverable primary lighten-5 cardlink">
                    {this.props.description}
                </Card>
            </Link>
        );
    }
};