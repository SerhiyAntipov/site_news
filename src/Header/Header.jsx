import React, { Component } from 'react';
import './Header.css';
import MainMenu from '../MainMenu/MainMenu';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <header className="main-header bg-dark" >
                <nav className="navbar navbar-expand-md bg-dark navbar-dark container">
                    <a className="navbar-brand" href="/" aria-label="navbar-brand"><img src={require('./img/logo.jpg')} alt="img logo"/> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-label="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <MainMenu/>
                    </div>
                </nav>
            </header >
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Header);
