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
    artist: null,
    name: null,
    avatar: null,
    artistId: null,
    follow: false
  }

  getArtist = () => {
    axios.get(`/artist/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data.body)
        this.setState({
          artist: response.data.body,
          name: response.data.body.name,
          avatar: response.data.body.images[0].url,
          artistId: response.data.body.id,
        })
      })
  }

  followButton = (event) => {
    event.preventDefault();
    console.log('follow', this.state.follow)
    this.setState({
      follow: true
    })
  }
  unfollowButton = (event) => {
    event.preventDefault();
    console.log('follow', this.state.follow)
    this.setState({
      follow: false
    })
  }



  componentDidMount() {
    this.getArtist();
  }

  render() {
    const artist = this.state.artist;
    if (!artist) return <h1>Loading...</h1>
    return (
      <div className='artistResult' >
        <Navbar />
        <div>
          {artist.images[0] ? <img style={imgStyle} src={artist.images[0].url} alt={artist.name} /> : <img style={imgStyle} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
          <h1>{artist.name}</h1>
        </div>
        <div>
          <p>{this.state.artistId}</p>
          <a href={artist.external_urls.spotify}>Check in Spotify</a>
          {!this.state.follow ?
            <form onSubmit={this.followButton}>
              <button type='submit'>Follow</button>
            </form> :
            <form onSubmit={this.unfollowButton}>
              <button type='submit'>Unfollow</button>
            </form>}
          <div>
            <Albums artist={this.state.artistId} />
          </div>
        </div>



      </div >
    )
  }
}


