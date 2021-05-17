import React from 'react';
import axios from 'axios';
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



export default class Albums extends React.Component {

  state = {
    albums: [],
  }

  getAlbums = () => {
    axios.get(`/albums/${this.props.artist}`)
      .then(response => {
        this.setState({
          albums: response.data.body.items,
        })
      })
  }

  componentDidMount() {
    this.getAlbums();
  }

  render() {
    const albums = this.state.albums.map(album => {
      return (

        <div key={album.id} className='albumResults'>
          {album.images[0] ? <img style={imgStyle} src={album.images[0].url} alt={album.name} /> : <img style={imgStyle} src='https://peelander-z.com/wp-content/themes/soundcheck/images/default-album-artwork.png' alt="" />}
          <div className='albumContent'>
            <h4>{album.name}</h4>
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
        { albums}
      </div >
    )
  }

}