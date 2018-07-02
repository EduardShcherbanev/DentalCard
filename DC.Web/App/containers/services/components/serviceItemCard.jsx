import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle } from 'react-materialize';

export default class ServiceItemCard extends React.Component {
    render() {
        return (
            <Link to={this.props.to} className="cardlink">
                <Card header={<CardTitle image={this.props.image}></CardTitle>} className="hoverable black-text">
                    <p className="card-title">{this.props.name}</p>
                    <p className="card-description">{this.props.description}</p>
                </Card>
            </Link>
        );
    }
};