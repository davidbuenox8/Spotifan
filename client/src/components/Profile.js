import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import EditProfile from './EditProfile';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import axios from 'axios';
import ArtistResult from './ArtistResult';
import AlbumResult from './AlbumResult';

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
    savedAlbums: [],
    savedAlbumsButton: false,
    userSavedAlbums: this.props.user.savedAlbums
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

        this.setState({
          followedArtists: response.data.followedArtists,
          savedAlbums: response.data.savedAlbums
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
    this.setState({
      editForm: false,
      followedArtistButton: !this.state.followedArtistButton,
      savedAlbumsButton: false
    })
  }

  toggleSavedAlbums = () => {
    this.setState({
      editForm: false,
      followedArtistButton: false,
      savedAlbumsButton: !this.state.savedAlbumsButton
    })
  }

  render() {
    console.log(this.state.savedAlbums)
    const user = this.state.user;
    const followedArtist = this.state.followedArtists.map(result => {
      return (
        <div key={result.artistObj.id}>
          <ArtistResult result={result.artistObj} />
        </div>
      )
    })
    const savedAlbums = this.state.savedAlbums.map(result => {
      return (
        <div key={result.albumObj.id}>
          <AlbumResult bookmark='true' userSavedAlbums={this.state.userSavedAlbums} album={result.albumObj} />
        </div>
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

            <button onClick={this.toggleSavedAlbums}><strong>Saved Albums</strong></button>
          </div>
          <div className='signup'>
            <button onClick={this.toggleFollowedArtists}><strong>Followed Artists</strong> </button>
          </div>
        </div>
        <div className='resultscontainer'>
          {this.state.followedArtistButton === true && followedArtist}
          {this.state.savedAlbumsButton === true && savedAlbums}
        </div>

      </>
    )
  }

}