import React from 'react';
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-materialize'

export default class ServiceCard extends React.Component {
    render() {
        return (
            <Link to={this.props.to} className="cardlink">
                <Card className="hoverable" title={this.props.serviceName}>
                    <Row>
                        <Col s={5} m={5} l={5}>
                            <img src={this.props.image} alt="" />
                        </Col>
                        <Col s={7} m={7} l={7}>
                            {this.props.serviceTasks.map(item => (<p className="card-description" key={item.name}>— {item.name}</p>))}
                        </Col>
                    </Row>
                </Card>
            </Link>
        );
    }
};