import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import user from './img/user.png';
import { Redirect } from "react-router-dom";


class Profile extends React.Component {

    render() {
        let props = this.props.userProfile
        if (localStorage.getItem('login') !== "false" && localStorage.getItem('login') !== false) {
            return (
                <section className='profile container' >
                    <h2 className="section-title">{this.props.menu[2].name}</h2>
                    <article className="profile-article">
                        <h4 className="text-primary profile-article__title">User {props.name}</h4>
                        <div className="profile-article__content">
                            <div><img className="profile-article__img" src={user} alt="user-photography" /></div>
                            {/* <img className="profile-article__img" src={require('./img/user.png')} alt="user photography" /> */}
                            <div className="profile-article__text-content">
                                <h3>name: {props.name}</h3>
                                <h4>email: {props.email}</h4>
                                <h5>phone: {props.phone}</h5>
                                <h5>position: {props.position}</h5>
                                <h5>username: {props.username}</h5>
                                <h5>password: {props.password}</h5>
                                {this.props.userProfile.description.map((element, i) =>
                                    <p key={i}>{element.article}</p>)
                                }
                            </div>
                        </div>
                    </article>
                </section>
            )
        } else {
            return (
                <Redirect from="/profile" to="/login" />
            )
        }
    }
}

function mappropsToProps(props) {
    return {
        userProfile: props.userProfile,
        menu: props.menu,
    }
}

export default connect(mappropsToProps)(Profile);