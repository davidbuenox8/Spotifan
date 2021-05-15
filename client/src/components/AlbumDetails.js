import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';

export default class AlbumDetails extends React.Component {

  state = {
    tracks: [],

  }

  getTracks = () => {
    axios.get(`/album/${this.props.match.params.albumId}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          tracks: response.data,

        })
      })
  }

  componentDidMount = () => {
    this.getTracks();
  }


  render() {

    const tracks = this.state.tracks.map(track => {
      return (
        <div className='trackList' key={track.id}>
          <h3>{track.name}</h3>
        </div>
      )
    })
    console.log(this.state.url)
    const url = this.state.url

    return (
      <div>
        <Navbar />
        <h1>album details</h1>
        {tracks}
        <p><a href={url}> Check album in Spotify</a></p>

      </div>
    )
  }
}