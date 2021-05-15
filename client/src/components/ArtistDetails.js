import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';
import Albums from './Albums'

const imgStyle = {
  width: '50px',
  borderRadius: '50%'
}

export default class ArtistDetails extends React.Component {

  state = {
    artistObj: null,
    name: null,
    avatar: null,
    artistIdFromSpotify: null,
    userArtistsIds: null,

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
        console.log('The model created?', response.data)
        this.setState({
          userArtistsIds: response.data.followedArtists,
          artistmodelId: response.data._id

        })
      })
  }
  unfollowButton = (event) => {
    event.preventDefault();
    console.log('The EVENT', event)
    axios.put(`/api/artist/${this.state.artistmodelId}`)
      .then((response) => {
        console.log('the axios response', response)
        this.setState({
          userArtistsIds: response.data.followedArtists,
        })
      })
  }


  userFollowedArtists = () => {
    axios.get('/api/auth/user')
      .then(response => {
        const filter = response.data.followedArtists.map(artist => artist.artistIdFromSpotify)
        console.log('THE USER FOLLOWS:', filter);
        this.setState({
          userArtistsIds: filter
        })
      })
  }



  componentDidMount() {
    this.userFollowedArtists()
    this.getArtist();
  }

  render() {
    console.log('THE _ID', this.state.artistmodelId)
    const artist = this.state.artistObj;
    if (!artist) return <h1>Loading...</h1>
    return (
      <div className='artistResult' >
        <Navbar />
        <div>
          {artist.images[0] ? <img style={imgStyle} src={artist.images[0].url} alt={artist.name} /> : <img style={imgStyle} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
          <h1>{artist.name}</h1>
        </div>
        <div>
          <p>{this.state.artistIdFromSpotify}</p>
          <a href={artist.external_urls.spotify}>Check in Spotify</a>
          {this.state.userArtistsIds.includes(this.state.artistIdFromSpotify) ?
            <form onSubmit={this.unfollowButton}>
              <button type='submit'>Unfollow</button>
            </form> : <form onSubmit={this.followButton}>
              <button type='submit'>Follow</button>
            </form>}
          <div>

            <Albums artist={this.state.artistIdFromSpotify} />
          </div>
        </div>
      </div>
    )
  }
}


