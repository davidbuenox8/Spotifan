import React from 'react';
import axios from 'axios';
import AlbumResult from './AlbumResult';



export default class Albums extends React.Component {

  state = {
    albums: [],
    userSavedAlbums: this.props.userSavedAlbums
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
        <div key={album.id} >
          <AlbumResult userSavedAlbums={this.state.userSavedAlbums} album={album} />
        </div>
      )
    })

    return (
      <div>
        { albums}
      </div>
    )
  }

}