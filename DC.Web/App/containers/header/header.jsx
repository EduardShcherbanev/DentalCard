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
        if (window.scrollY > 112) {
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 112) {
            if (window.innerWidth > 992) {
                this.setState({
                    scrollingLock: false
                });
            } else {
                this.setState({
                    scrollingLock: true
                });
            }
        }
    }

    render() {
        return (
            <div style={{ marginBottom: this.state.scrollingLock ? "64px" : "0" }}>
                <div className="hide-on-med-and-down primary lighten-4">
                    <img className="brand-logo responsive-img" src="favicon.png" alt="" />
                    <div className="right valign-wrapper">
                        <p><a href="tel:+7 926 191-23-94"><Icon tiny>phone</Icon> +7 926 191-23-94</a></p>
                        <p><a href="mailto:fireshock2@gmail.com"><Icon tiny>email</Icon> fireshock2@gmail.com</a></p>
                    </div>
                </div>
                <Navbar brand="Dental Card" right className="primary" style={{ width: "100%", top: "0", position: this.state.scrollingLock ? "fixed" : "relative" }}>
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