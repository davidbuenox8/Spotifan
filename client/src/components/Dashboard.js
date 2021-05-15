import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar'

export default class Dashboard extends Component {

  state = {
    tracks: []
  }

  getData = () => {
    axios.get('/followedArtistsTracks')
      .then(response => {
        console.log(response)
        this.setState({
          track: response.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Dashboard</h1>

      </div>
    )
  }

}