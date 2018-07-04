import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavLink, Dropdown, Button, Icon } from 'react-materialize'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 236) {
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 236) {
            this.setState({
                scrollingLock: false
            });
        }
    }

    render() {
        return (
            <div style={{ marginBottom: this.state.scrollingLock ? "320px" : "0" }}>
                <div className="header" style={{ width: "100%", top: this.state.scrollingLock ? "-236px" : "0", position: this.state.scrollingLock ? "fixed" : "relative" }}>
                    <div className="header-overlay"></div >
                    <div className="header-top">
                        <img className="header-top-logo" src="favicon.png" alt="" />
                        <ul className="header-top-contacts">
                            <li><a className="white-text" href="tel:+7 926 191-23-94"><Icon tiny>phone</Icon> +7 926 191-23-94</a></li>
                            <li><a className="white-text" href="mailto:fireshock2@gmail.com"><Icon tiny>email</Icon> fireshock2@gmail.com</a></li>
                            <li><a className="white-text" href="mailto:fireshock2@gmail.com"><Icon tiny>check</Icon> Записаться</a></li>
                        </ul>
                    </div>
                    <Navbar brand="Доктор Диана" right className="header-menu">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">Обо мне</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/portfolio">Мои работы</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </Navbar>
                </div >
            </div>
        );
    }
};