import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavLink, Dropdown, Button, Icon } from 'react-materialize'


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="hide-on-med-and-down cyan lighten-4">
                    <img className="brand-logo responsive-img" src="favicon.png" />
                    <div className="right">
                        <h5><Icon>phone</Icon> +7 926 191-23-94</h5>
                        <h5><Icon>email</Icon> fireshock2@gmail.com</h5>
                    </div>
                </div>
                <Navbar brand="Dental Card" right className="cyan">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="about">Обо мне</Link></li>
                    <li><Link to="services">Услуги</Link></li>
                    <li><Link to="portfolio">Мои работы</Link></li>
                    <li><Link to="contacts">Контакты</Link></li>
                </Navbar>
            </div >
        );
    }
};