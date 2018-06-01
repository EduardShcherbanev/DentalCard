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
            <div className="navbar-fixed">
                <nav className="cyan">
                    <div className="nav-wrapper">
                        <div className="brand-logo">
                            <i className="material-icons">mood</i>
                            <Link to="/">Диана Геворкян</Link>
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
                                <Link to="/contacts">Контакты</Link>
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
        );
    }
};