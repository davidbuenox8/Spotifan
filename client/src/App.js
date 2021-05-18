import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import ArtistSearch from './components/ArtistSearch';
import ArtistDetails from './components/ArtistDetails';
import axios from 'axios';


class App extends React.Component {

  state = {
    user: this.props.user,
  }

  setUser = user => {
    this.setState({ user });
  }



  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route
            exact path="/signup"
            render={props => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
            exact path="/login"
            render={props => <Login setUser={this.setUser} {...props} />}
          />
          <ProtectedRoute
            path='/dashboard'
            user={this.state.user}
            component={Dashboard}
            redirectPath='/login'
          />
          <ProtectedRoute
            path='/profile'
            user={this.state.user}
            component={Profile}
            redirectPath='/login'
            setUser={this.setUser}
          />

          <ProtectedRoute
            path='/artistSearch'
            user={this.state.user}
            component={ArtistSearch}
            redirectPath='/login'
          />
          <ProtectedRoute
            path='/artist/:id'
            user={this.state.user}
            component={ArtistDetails}
            redirectPath='/login'
          />

        </Switch>
      </div>
    );
  }
}

export default App;
