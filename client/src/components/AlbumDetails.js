import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';
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
      {/*     <div key={album.id} className='albumResults'>
        {album.images[0] ? <img style={imgStyle} src={album.images[0].url} alt={album.name} /> : <img style={imgStyle} src='https://peelander-z.com/wp-content/themes/soundcheck/images/default-album-artwork.png' alt="" />}
        <div className='albumContent'>
          <h4>{album.name}</h4>
          <div className='bookandlogo' >
            <a href={album.external_urls.spotify}> <img style={logo} src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" alt="" /></a>
            <button> <img style={bookmark} src={whiteBookmark} alt="bookmark" /></button>
          </div>
        </div>
    </div>  */}
    )
  }
}