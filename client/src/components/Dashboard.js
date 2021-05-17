import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import AlbumResult from './AlbumResult';


export default class Dashboard extends Component {

  state = {
    tracks: []
  }

  getData = () => {
    axios.get('/followedArtistsTracks')
      .then(response => {
        console.log(response.data)
        const mergedData = [].concat.apply([], response.data)
        const sortedData = mergedData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        console.log(sortedData)
        this.setState({
          tracks: sortedData
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    const albums = this.state.tracks.map(album => {
      return (
        <div key={album.id}>
          <AlbumResult album={album} />
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