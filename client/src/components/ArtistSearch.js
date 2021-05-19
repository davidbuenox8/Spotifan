import React from 'react';
import axios from 'axios';
import ArtistResult from './ArtistResult';


export default class ArtistSearch extends React.Component {

  state = {
    artists: [],
    query: '',
    avatar: ''
  }


  getUser() {
    axios.get('/api/users')
      .then(response => {
        this.setState({
          avatar: response.data.avatar
        })
      })
  }

  componentDidMount() {
    this.getUser()
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
      height: '50px',
      borderRadius: '50%'
    }

    const imgStyleProfile = {
      borderRadius: '50%',
      width: '35px'
    }
    const artists = this.state.artists.map(result => {
      return (
        <div key={result.id}>
          <ArtistResult result={result} />

        </div>
      )
    })
    return (
      <div>
        <nav>
          <h3>{this.state.avatar ? <a href="/profile"><img className='profileImgNav' src={this.state.avatar} alt="avatar" /></a> : <a href="/profile"><img className='profileImgNav' src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" /></a>}</h3>
          <h3><form onSubmit={this.searchArtist}>
            <div className='searchbar'>
              <input className="search" type="text" name='query'
                placeholder='Search...' onChange={this.handleSearch} />
              <button type='submit' className='searchButton'> <img style={mgnGlass} src="https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png" alt="glass" /> </button>
            </div>
          </form></h3>

          <h3> <a href="/dashboard"> <img style={imgStyleNav} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1200px-Home_Icon.svg.png" alt="Home" />  </a> </h3>
        </nav>
        <div className='resultscontainer'>
          {!this.state.query ? <h2 className='textbefore'>Try searching for artists.</h2> : <h1></h1>}
          {artists ? artists : <h1>No results, try again...</h1>}
        </div>
      </div>
    )
  }

}