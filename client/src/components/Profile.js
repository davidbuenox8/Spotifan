import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import EditProfile from './EditProfile';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import axios from 'axios'

const imgStyleProfile = {
  borderRadius: '50%',
  width: '100px'
}
export default class Profile extends React.Component {

  state = {
    user: this.props.user,
    chosenName: '',
    avatar: '',
    editForm: false,
    followedArtistButton: false
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    })
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    const { chosenName } = this.state;

    e.preventDefault();
    axios.put(`/api/users/${this.state.user._id}`, {
      chosenName,
    })
      .then(response => {
        console.log('IS IT THIS?', response.data)
        this.setState({
          user: response.data,
          chosenName: response.data.name,
          editForm: false
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
    })
  }

  toggleEditForm = () => {
    this.setState((state) => ({
      editForm: !state.editForm
    }))
  }

  render() {
    const user = this.state.user
    return (
      <>
        <Navbar />
        <div className='profilecontainer'>
          {user.avatar ? <img src={user.avatar} alt="avatar" /> : <img style={imgStyleProfile} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
          {user.chosenName ? <h1>{user.chosenName}</h1> : <h1>{user.username}</h1>}
          <button id='edit' className='followButton' onClick={this.toggleEditForm}>Edit</button>
          <Link to='/' onClick={this.handleLogout}> <button className='followButton'>Log Out</button> </Link>
        </div>
        {this.state.editForm && (
          <EditProfile
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />)}
        <div className='profilecontent'>
          <div className='signup'>

            <button><strong>Listen Later</strong></button>
          </div>
          <div className='signup'>
            <button><strong>Followed Artists</strong> </button>
          </div>
        </div>

      </>
    )
  }

}