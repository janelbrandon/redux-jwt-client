import React, { Component, Fragment } from 'react';
import './App.css';
import decodeJWT from 'jwt-decode'
import { setJwt } from './api/init'
import SignIn from './components/SignIn'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import store from './config/store'
import { fetchBookmarks } from './services/BookmarkService'
import BookmarkList from './components/BookmarkList'
import SessionInfo from './components/SessionInfo';
import { handleSignIn } from './services/SigninService'

class App extends Component {

  get token() {
    return localStorage.getItem('token')
  }

  render() {
    const tokenDetails = this.token && decodeJWT(this.token)
    return (
      <div className="App">
        {
          <Router>
            <Fragment>
              <Route exact path="/" render={(props) => (
                <Redirect to="/login" />
              )} />
              <Route exact path="/login" render={(props) => {
                if (this.token) {
                  return (<Redirect to="/bookmarks" />)
                } else {
                  return (<SignIn loginError={store.getState().loginError} handleSignIn={handleSignIn} />)
                }
              }} />
              <Route exact path="/bookmarks" render={() => (
                this.token ? (

                  <Fragment>
                    <SessionInfo tokenDetails={tokenDetails} />
                    <BookmarkList />
                  </Fragment>

                ) : (
                    <Redirect to="/login" />
                  )
              )} />
            </Fragment>
          </Router>
        }
      </div>
    );
  }

  componentDidMount() {
    if (this.token) {
      setJwt(this.token)
      fetchBookmarks()
    }
  }


}


export default App;
