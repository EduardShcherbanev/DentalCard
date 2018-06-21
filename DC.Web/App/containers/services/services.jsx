import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Button, Navbar, Dropdown, NavItem, Row, Col, CardPanel } from 'react-materialize'

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="row primary-text">
                        <h1>Услуги</h1>
                    </div>
                </div>
                <Tabs>
                    <Tab title="Диагностика">Test 4</Tab>
                    <Tab title="Терапия">Test 1</Tab>
                    <Tab title="Ортопедия" active>Test 2</Tab>
                    <Tab title="Хирургия">Test 3</Tab>
                    <Tab title="Имплантология">Test 4</Tab>
                    <Tab title="Гнатология">Test 4</Tab>
                </Tabs>
                <Navbar brand="Dental Card" right className="primary lighten-3">
                    <li><Link to="/">Диагностика</Link></li>
                    <li><Link to="about">Терапия</Link></li>
                    <li><Link to="services">Ортопедия</Link></li>
                    <li><Link to="portfolio">Хирургия</Link></li>
                    <li><Link to="contacts">Имплантология</Link></li>
                    <li><Link to="contacts">Гнатология</Link></li>
                </Navbar>

                <Row className="right-align">
                    <Col s={2} m={2} l={2}>

                        <Link to="/"><CardPanel className="primary lighten-4 text-primary">Диагностика</CardPanel></Link>

                    </Col>
                    <Col s={2} m={2} l={2}>
                        <CardPanel className="primary lighten-4 text-primary">
                            <Link to="/">Диагностика</Link>
                        </CardPanel>
                    </Col>
                </Row>

                <div className="hide-on-large-only">
                    <Dropdown className="text-primary" options={{ hover: true, constrainWidth: false }} trigger={<Button floating large className="primary services-fab" waves="light" icon="list" />}>
                        <li><Link to="/">Диагностика</Link></li>
                        <li><Link to="about">Терапия</Link></li>
                        <li><Link to="services">Ортопедия</Link></li>
                        <li><Link to="portfolio">Хирургия</Link></li>
                        <li><Link to="contacts">Имплантология</Link></li>
                        <li><Link to="contacts">Гнатология</Link></li>
                    </Dropdown>
                </div>
            </div>
        );
    }
};