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

const imgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%'
}

export default class Profile extends React.Component {

  state = {
    user: this.props.user,
    chosenName: '',
    avatar: '',
    editForm: false,
    followedArtists: [],
    followedArtistButton: false,
    listenLater: [],
    listenLaterButton: false
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    })
  }

  userFollowedArtists = () => {
    axios.get('/api/users')
      .then(response => {
        console.log(response.data)
        const filter = response.data.followedArtists.map(artist => artist.artistIdFromSpotify)
        this.setState({
          followedArtists: response.data.followedArtists
        })
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
    this.userFollowedArtists();
  }

  toggleEditForm = () => {
    this.setState((state) => ({
      editForm: !state.editForm,
      followedArtistButton: false
    }))
  }

  toggleFollowedArtists = () => {
    console.log(this.state.followedArtistButton)
    this.setState({
      editForm: false,
      followedArtistButton: !this.state.followedArtistButton,
      listenLaterButton: false
    })
  }

  render() {
    const user = this.state.user;
    const followedArtist = this.state.followedArtists.map(result => {
      return (
        <Link key={result.artistObj.id} to={`/artist/${result.artistObj.id}`}>
          <div className='artistResult'>
            {result.artistObj.images[0] ? <img style={imgStyle} src={result.artistObj.images[0].url} alt={result.artistObj.name} /> : <img style={imgStyle} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
            <h3>{result.artistObj.name}</h3>
          </div>
        </Link>
      )
    })

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

            <button><strong>Saved Albums</strong></button>
          </div>
          <div className='signup'>
            <button onClick={this.toggleFollowedArtists}><strong>Followed Artists</strong> </button>
          </div>
        </div>
        <div className='resultscontainer'>
          {this.state.followedArtistButton === true && followedArtist}
        </div>

      </>
    )
  }

}