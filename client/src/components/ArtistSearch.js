import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';


export default class ArtistSearch extends React.Component {

  state = {
    artists: [],
    query: '',
  }

  searchArtist = (event) => {
    event.preventDefault();
    axios.get(`/artist-search/${this.state.query}`)

      .then(response => {
        this.setState({
          artists: response.data
        })
      })
      .catch(err => console.log(err))
  }

  handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.value
    this.setState({
      query: query
    })
  }

  render() {
    const imgStyle = {
      width: '50px',
      borderRadius: '50%'
    }
    const artists = this.state.artists.map(result => {
      return (
        <Link key={result.id} to={`/artist/${result.id}`}>
          <div className='artistResult'>
            {result.images[0] ? <img style={imgStyle} src={result.images[0].url} alt={result.name} /> : <img style={imgStyle} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
            <h1>{result.name}</h1>
          </div>
        </Link>
      )
    })

    return (
      <div>
        <Navbar />
        <form onSubmit={this.searchArtist}>
          <div>
            <input className="search" type="text" name='query' onChange={this.handleSearch} />
            <button type='submit' className='searchButton'>Search</button>
          </div>
        </form>
        <h1>Search Results</h1>
        {artists}
      </div>
    )
  }

}