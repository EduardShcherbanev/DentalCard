import React from 'react';
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-materialize'

export default class ServiceCard extends React.Component {
    render() {
        return (
            <Link to={this.props.to} className="cardlink">
                <Card className="hoverable" title={this.props.serviceName}>
                    <Row>
                        <Col s={4} m={4} l={4}>
                            <img src={this.props.image} alt="" />
                        </Col>
                        <Col s={8} m={8} l={8}>
                            {this.props.serviceTasks.map(item => (<p className="primary-text" key={item.name}>— {item.name}</p>))}
                        </Col>
                    </Row>
                </Card>
            </Link>
        );
    }
};