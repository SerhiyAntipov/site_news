import React from 'react';
import './Login.css';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enteredIncorrect: ""
        }
    }

    formSubmit = (event) => {
        event.preventDefault()
        let formUserName = document.querySelector('#user-name')
        let formPassword = document.querySelector('#password')

        if (formUserName.value === this.props.userProfile.username &&
            Number(formPassword.value) === Number(this.props.userProfile.password)) {
            formUserName.value = '';
            formPassword.value = '';
            this.setState({ enteredIncorrect: '' })
            window.location.href = '/profile';
            localStorage.setItem('login', true);
        } else {
            let temp = <h4 className="entered-incorrect">The username or password you entered is incorrect</h4>
            this.setState({ enteredIncorrect: temp })
            formUserName.value = '';
            formPassword.value = '';
            localStorage.setItem('login', false);
        }

    }

    render() {
        return (
            <section className='login-form container' >
                <h2 className="section-title">{this.props.menu[3].name}</h2>
                <form action="/action_page.php">
                    <div className="form-row">
                        <div className="form-group col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                            <label htmlFor="user-name">User name:</label>
                            <input type="text" className="form-control" id="user-name" required />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" autoComplete='off' required />
                        </div>
                    </div>
                    <div>
                        <br/>
                        <p>If the user clicks on the “profile page” and he is not authorized - throw on the “login page”</p>
                        <p><b>Default data:</b></p>
                        <ul>
                            <li>User name : admin</li>
                            <li>Password : 12345</li>
                        </ul>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.formSubmit}>Submit</button>
                </form>
                {this.state.enteredIncorrect}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu,
        userProfile: state.userProfile
    }
}

export default connect(mapStateToProps)(Login);