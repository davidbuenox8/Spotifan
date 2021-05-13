import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';




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
    console.log(this.state.albums)
    const imgStyle = {
      width: '100px'
    }
    const albums = this.state.albums.map(album => {
      return (
        <Link key={album.id} to={`/album/${album.id}`}>
          <div className='albumdiv'>
            {album.images[0] ? <img style={imgStyle} src={album.images[0].url} alt={album.name} /> : <img style={imgStyle} src='https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg' alt="" />}
            <h4>{album.name}</h4>
            <p>{album.id}</p>
          </div>
        </Link >
      )
    })

    return (
      <div>
        <h2>Albums</h2>
        { albums}
      </div >
    )
  }

}