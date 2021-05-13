import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar'

export default class Dashboard extends Component {

  state = {
    tracks: []
  }

  getData = () => {

  }

  /*   componentDidMount() {
      this.getData();
    } */

  render() {
    return (
      <div>
        <Navbar />
        <h1>Dashboard</h1>

      </div>
    )
  }

}