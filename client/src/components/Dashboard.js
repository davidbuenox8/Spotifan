import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Albums from './Albums';
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
        <div key={album.id} className='albumResults'>
          {album.images[0] ? <img style={imgStyle} src={album.images[0].url} alt={album.name} /> : <img style={imgStyle} src='https://peelander-z.com/wp-content/themes/soundcheck/images/default-album-artwork.png' alt="" />}
          <div className='albumContent'>
            <h4>{album.name}</h4>
            <p className='pAlbum'>By: {album.artists[0].name}</p>
            <div className='bookandlogo' >
              <a href={album.external_urls.spotify}> <img style={logo} src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" alt="" /></a>
              <button> <img style={bookmark} src={whiteBookmark} alt="bookmark" /></button>
            </div>
          </div>
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