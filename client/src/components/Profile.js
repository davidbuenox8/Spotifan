import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import EditProfile from './EditProfile';
import axios from 'axios';
import ArtistResult from './ArtistResult';
import AlbumDetails from './AlbumDetails';
import service from '../api/service';




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
    userSavedAlbums: this.props.user.savedAlbums.map(album => album.albumIdFromSpotify)
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    })
  }

  userFollowedArtists = () => {
    axios.get('/api/users')
      .then(response => {
        const filterAlbum = response.data.savedAlbums.map(album => album.albumIdFromSpotify)
        this.setState({
          followedArtists: response.data.followedArtists,
          savedAlbums: response.data.savedAlbums,
          userSavedAlbums: filterAlbum
        })
      })
  }


  componentDidMount() {
    this.userFollowedArtists();
  }



  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleFileUpload = (e) => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
    const uploadData = new FormData();

    uploadData.append('avatar', e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then(response => {
        console.log('response is: ', response);
        this.setState({
          avatar: response.secure_url
        });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  }

  handleSubmit = e => {
    console.log(e)
    const { chosenName, avatar } = this.state;

    e.preventDefault();
    axios.put(`/api/users/${this.state.user._id}`, {
      chosenName, avatar
    })
      .then(response => {
        console.log('second resopnse', response.data)
        this.setState({
          user: response.data,
          chosenName: response.data.name,
          avatar: response.data.avatar,
          editForm: false
        })
      })
      .catch(err => console.log(err));
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
          <AlbumDetails bookmark='true' userFollowedArtists={this.userFollowedArtists} userSavedAlbums={this.state.userSavedAlbums} album={result.albumObj} />
        </div>
      )
    })

    return (
      <>
        <Navbar />
        <div className='profilecontainer'>
          {user.avatar ? <img src={user.avatar} alt="avatar" /> : <img src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
          {user.chosenName ? <h1>{user.chosenName}</h1> : <h1>{user.username}</h1>}
          <button id='edit' className='followButton' onClick={this.toggleEditForm}>Edit</button>
          <Link to='/' onClick={this.handleLogout}> <button className='followButton'>Log Out</button> </Link>
        </div>
        {this.state.editForm && (
          <EditProfile
            {...this.state}
            handleFileUpload={this.handleFileUpload}
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