import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import AlbumDetails from './AlbumDetails';


export default class Dashboard extends Component {

  state = {
    sortedAlbums: [],
    userSavedAlbums: null,
    savedAlbums: []
  }

  getData = () => {
    axios.get('/followedArtistsTracks')
      .then(response => {
        const mergedData = [].concat.apply([], response.data)
        const sortedData = mergedData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        const filteredData = sortedData.slice(0, 100)
        this.setState({
          sortedAlbums: filteredData
        })
      })
      .catch(err => console.log(err))
  }

  userFollowedArtists = () => {
    axios.get('/api/users')
      .then(response => {
        const filterArtist = response.data.followedArtists.map(artist => artist.artistIdFromSpotify)
        const filterAlbum = response.data.savedAlbums.map(album => album.albumIdFromSpotify)
        this.setState({
          savedAlbums: response.data.savedAlbums,
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
    const albums = this.state.sortedAlbums.map((album, index) => {
      if (!this.state.userSavedAlbums) return <h1 key={index} >Loading...</h1>
      return (
        <div key={album.id}>
          <AlbumDetails userFollowedArtists={this.userFollowedArtists} userSavedAlbums={this.state.userSavedAlbums} album={album} />
        </div>
      )
    })
    return (
      <div className='dashcontainer'>
        <Navbar />
        {this.state.sortedAlbums.length === 0 ? <h2 className='textbefore'>Your dashboard looks quite empty...
        Go and follow some artists.</h2> : albums}
      </div>
    )
  }

}