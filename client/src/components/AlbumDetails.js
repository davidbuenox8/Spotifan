import axios from 'axios';
import React from 'react';
import redBookmark from '../img/redBookmark.png';
import whiteBookmark from '../img/whiteBookmark.png'


const imgStyle = {
  width: '100px'
}
const logo = {
  width: '50px',
}

const bookmark = {
  width: '30px'
}


export default class AlbumDetails extends React.Component {

  state = {
    albumObj: this.props.album,
    albumName: this.props.album.artists[0].name,
    albumIdFromSpotify: this.props.album.id,
    userSavedAlbums: this.props.userSavedAlbums,
  }


  bookmarkButton = (event) => {
    event.preventDefault();
    const { albumObj, albumName, albumIdFromSpotify } = this.state
    axios.post('/api/albums', {
      albumObj,
      albumName,
      albumIdFromSpotify,
    })
      .then(response => {
        const filter = response.data.savedAlbums.map(album => album.albumIdFromSpotify)
        this.setState({
          userSavedAlbums: filter,
        })
        this.props.userFollowedArtists()
      })
  }

  unbookmarkButton = (event) => {
    event.preventDefault();
    axios.delete(`/api/albums/${this.state.albumIdFromSpotify}`)
      .then((response) => {
        const filter = response.data.savedAlbums.map(album => album.albumIdFromSpotify)
        this.setState({
          userSavedAlbums: filter,
        })
        this.props.userFollowedArtists()
      })
  }

  render() {
    return (
      <div key={this.props.album.id} className='albumResults'>
        {this.props.album.images[0] ? <img style={imgStyle} src={this.props.album.images[0].url} alt={this.props.album.name} /> : <img style={imgStyle} src='https://peelander-z.com/wp-content/themes/soundcheck/images/default-album-artwork.png' alt="" />}
        <div className='albumContent'>
          <h4>{this.props.album.name}</h4>
          <p className='pAlbum'>By: {this.props.album.artists[0].name}</p>
          <div className='bookandlogo' >
            <a href={this.props.album.external_urls.spotify}> <img style={logo} src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" alt="" /></a>
            {(this.state.userSavedAlbums.includes(this.state.albumIdFromSpotify) || this.props.bookmark === 'true') ?
              <button onClick={this.unbookmarkButton}> <img style={bookmark} src={redBookmark} alt="bookmark" /></button> :
              <button onClick={this.bookmarkButton}> <img style={bookmark} src={whiteBookmark} alt="bookmark" /></button>}
          </div>
        </div>
      </div>
    )
  }
}