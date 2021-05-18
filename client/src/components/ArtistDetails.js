import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';
import Albums from './Albums';

const imgStyle = {
  width: '100px',
  borderRadius: '50%'
}

export default class ArtistDetails extends React.Component {

  state = {
    user: this.props.user,
    artistObj: null,
    name: null,
    avatar: null,
    artistIdFromSpotify: null,
    userArtistsIds: null,
    userSavedAlbums: null,

  }

  getArtist = () => {
    axios.get(`/artist/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          artistObj: response.data.body,
          name: response.data.body.name,
          avatar: response.data.body.images[0].url,
          artistIdFromSpotify: response.data.body.id,

        })
      })
  }

  followButton = (event) => {
    event.preventDefault();
    const { artistObj, name, avatar, artistIdFromSpotify } = this.state
    axios.post('/api/artists', {
      artistObj,
      name,
      avatar,
      artistIdFromSpotify,
    })
      .then(response => {
        const filter = response.data.followedArtists.map(artist => artist.artistIdFromSpotify);
        this.setState({
          userArtistsIds: filter
        })
      })
  }
  unfollowButton = (event) => {
    event.preventDefault();
    axios.delete(`/api/artists/${this.state.artistIdFromSpotify}`)
      .then((response) => {
        const filter = response.data.followedArtists.map(artist => artist.artistIdFromSpotify)
        console.log('the axios response', response)
        this.setState({
          userArtistsIds: filter
        })
      })
  }


  userFollowedArtists = () => {
    axios.get('/api/users')
      .then(response => {
        const filterArtist = response.data.followedArtists.map(artist => artist.artistIdFromSpotify)
        const filterAlbum = response.data.savedAlbums.map(album => album.albumIdFromSpotify)
        this.setState({
          userArtistsIds: filterArtist,
          userSavedAlbums: filterAlbum,
        })
      })
  }



  componentDidMount() {
    this.userFollowedArtists()
    this.getArtist();
  }

  render() {

    const artist = this.state.artistObj;
    const artistsIds = this.state.userArtistsIds;
    if (!artist || !artistsIds) return (
      <div>
        <Navbar />
        <h1>Loading...</h1>
      </div>
    )

    return (
      <div >
        <Navbar />
        <div className='resultscontainer'>
          <div className='artistcontainer' >
            <div>
              {artist.images[0] ? <img style={imgStyle} src={artist.images[0].url} alt={artist.name} /> : <img style={imgStyle} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
              <h2>{artist.name}</h2>
            </div>
            {this.state.userArtistsIds.includes(this.state.artistIdFromSpotify) ?
              <form onSubmit={this.unfollowButton}>
                <button className='followButton' type='submit'>Unfollow</button>
              </form> : <form onSubmit={this.followButton}>
                <button className='followButton' type='submit'>Follow</button>
              </form>}
          </div>
          <div>
            <Albums userFollowedArtists={this.userFollowedArtists} userSavedAlbums={this.state.userSavedAlbums} artist={this.state.artistIdFromSpotify} />
          </div>

        </div>
      </div>
    )
  }
}


