import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export default class Profile extends React.Component {

  state = {
    user: this.props.user
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Link to='/' onClick={this.handleLogout}>Log Out</Link>
        <h1>User Profile</h1>
      </div>
    )
  }

}