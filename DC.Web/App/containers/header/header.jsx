import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    }

    render() {
        return (
            <div>
                <div className="hide-on-med-and-down cyan lighten-4 white-text">
                    <img className="brand-logo responsive-img" src="favicon.png" />
                    <h5 className="right">+7 926 191-23-94</h5>
                </div>
                <div className="navbar-fixed">
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a className="right white-text" href="viber://tel:+79261912394"><i className="material-icons">message</i>Viber</a></li>
                        <li><a className="right white-text" href="whatsapp://tel:+79261912394"><i className="material-icons">message</i>Whatsapp</a></li>
                        <li><a className="right white-text" href="mailto:fireshock2@gmail.com"><i className="material-icons">email</i>fireshock2@gmail.com</a></li>
                        <li className="divider"></li>
                        <Link to="/contacts">Еще</Link>
                    </ul>
                    <nav className="cyan">
                        <div className="nav-wrapper">
                            <div className="brand-logo">
                                <Link to="/">Dental Card</Link>
                            </div>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/">Главная</Link>
                                </li>
                                <li>
                                    <Link to="/about">Обо мне</Link>
                                </li>
                                <li>
                                    <Link to="/services">Услуги</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Моя практика</Link>
                                </li>
                                <li>
                                    <a className="dropdown-trigger" href="#!" data-target="dropdown1">Контакты<i className="material-icons right">arrow_drop_down</i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <ul className="sidenav" id="mobile-demo">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/about">Обо мне</Link>
                        </li>
                        <li>
                            <Link to="/services">Услуги</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Моя практика</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};