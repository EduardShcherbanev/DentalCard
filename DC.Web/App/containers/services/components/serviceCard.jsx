import React from 'react';
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-materialize'

export default class ServiceCard extends React.Component {
    render() {
        return (
            <Link to={this.props.to}>
                <Card className="hoverable primary lighten-5 cardlink" title={this.props.serviceName}>
                    <Row>
                        <Col s={6} m={6} l={6}>
                            <img src={this.props.image} alt="" />
                        </Col>
                        <Col s={6} m={6} l={6}>
                            {this.props.serviceTasks.map(item => (<p className="primary-text" key={item.name}>— {item.name}</p>))}
                        </Col>
                    </Row>
                </Card>
            </Link>
        );
    }
};