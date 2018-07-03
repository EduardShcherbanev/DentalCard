import React from 'react';
import { Link } from "react-router-dom";

export default class HeadedPage extends React.Component {
    render() {
        return (
            <div>
                <h3 className="header-text center">{this.props.header}</h3>
                {this.props.children}
            </div>
        );
    }
};