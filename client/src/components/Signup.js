import React, { Component } from 'react'
import { signup } from '../services/auth';
import { Link } from 'react-router-dom';

export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    signup(username, password)
      .then(response => {
        if (response.message) {
          this.setState({
            message: response.message,
            username: '',
            password: ''
          })
        } else {
          this.props.setUser(response);
          this.props.history.push('/dashboard')
        }
      })
  }

  render() {
    return (
      <div className='homepage'>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='userpasscontainer'>

            <label htmlFor="username"> <strong> Username:</strong> </label>
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password"><strong>Password:</strong> </label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

          </div>
          <div className='logcontainer'>
            <div className='signup'>

              <div className='signup'>
                <Link to="/"> <strong>Back</strong> </Link>
              </div>
            </div>
            <div className='signup'>

              <button type="submit"><strong>Sign Up</strong></button>
            </div>
          </div>
          {this.state.message && (
            <h4 className='message'>{this.state.message}</h4>
          )}
        </form>
      </div>
    )
  }
}
