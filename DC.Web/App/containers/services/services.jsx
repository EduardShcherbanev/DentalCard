import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Button, Navbar } from 'react-materialize'

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="row cyan-text">
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
                <Navbar brand="Dental Card" right className="cyan lighten-3">
                    <li><Link to="/">Диагностика</Link></li>
                    <li><Link to="about">Терапия</Link></li>
                    <li><Link to="services">Ортопедия</Link></li>
                    <li><Link to="portfolio">Хирургия</Link></li>
                    <li><Link to="contacts">Имплантология</Link></li>
                    <li><Link to="contacts">Гнатология</Link></li>
                </Navbar>
            </div>
        );
    }
};