import React, { Component } from 'react';
import './MainMenu.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class MainMenu extends Component {

    render() {
        return (
            <nav className="container">
                <ul className="nav navbar-nav">
                    {this.props.menu.map((element, i) => 
                    <li key={i} className="nav-item"><Link to={element.link} className="nav-link">{element.name}</Link></li>)}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(MainMenu);
