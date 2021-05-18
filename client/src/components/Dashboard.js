import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import AlbumDetails from './AlbumDetails';


export default class Dashboard extends Component {

  state = {
    tracks: [],
    userSavedAlbums: this.props.user.savedAlbums,
    savedAlbums: null
  }

  getData = () => {
    axios.get('/followedArtistsTracks')
      .then(response => {
        console.log(response.data)
        const mergedData = [].concat.apply([], response.data)
        const sortedData = mergedData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        const filteredData = sortedData.slice(0, 100)
        console.log(filteredData)
        this.setState({
          tracks: filteredData
        })
      })
      .catch(err => console.log(err))
  }

  userFollowedArtists = () => {
    axios.get('/api/users')
      .then(response => {
        console.log(response.data)
        const filterArtist = response.data.followedArtists.map(artist => artist.artistIdFromSpotify)
        const filterAlbum = response.data.savedAlbums.map(album => album.albumIdFromSpotify)
        this.setState({
          followedArtists: filterArtist,
          userSavedAlbums: filterAlbum
        })
      })
  }

  componentDidMount() {
    this.getData();
    this.userFollowedArtists();
  }


  render() {
    const albums = this.state.tracks.map(album => {
      return (
        <div key={album.id}>
          <AlbumDetails userFollowedArtists={this.userFollowedArtists} userSavedAlbums={this.state.userSavedAlbums} album={album} />
        </div>
      )
    })
    return (
      <div>
        <Navbar />
        {this.state.tracks.length === 0 ? <h2 className='textbefore'>Your dashboard looks quite empty...
        Go and follow some artists.</h2> : albums}
      </div>
    )
  }

}