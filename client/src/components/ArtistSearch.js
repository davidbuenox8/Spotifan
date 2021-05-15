import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
    const imgStyleNav = {
      width: '35px'
    }
    const mgnGlass = {
      width: '15px'
    }
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
        <nav>
          <h3><a href="/profile">profile</a> </h3>

          <h3><form onSubmit={this.searchArtist}>
            <div className='searchbar'>
              <input className="search" type="text" name='query'
                placeholder='Search for artists...' onChange={this.handleSearch} />
              <button type='submit' className='searchButton'> <img style={mgnGlass} src="https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png" alt="glass" /> </button>
            </div>
          </form></h3>

          <h3> <a href="/dashboard"> <img style={imgStyleNav} src="https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/home-line-512.png" alt="Home" />  </a> </h3>
        </nav>

        {artists ? artists : <h1>No results...</h1>}
      </div>
    )
  }

}