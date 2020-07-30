import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './Login/Login';
import News from './News/News';
import Profile from './Profile/Profile';
import Page404 from './Page404/Page404';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

class App extends React.Component {

  // check localStorage
  componentDidMount() {
    if (localStorage.getItem('login') !== null) {
      this.setState({ login: localStorage.getItem('login') })
    } else {
      localStorage.setItem('login', false);
    }
  }

  render() {
    return (
      <Router >
        <div className="App" >
          <Header />
          <main>
            <Switch>
              <Route exact path={this.props.menu[0].link}> <Home /> </Route>
              <Route path={this.props.menu[1].link}> <News /> </Route>
              <Route path={this.props.menu[2].link}> <Profile /> </Route>
              <Route path={this.props.menu[3].link}> <Login /> </Route>
              <Route > <Page404 /> </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router >
    )
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(App);