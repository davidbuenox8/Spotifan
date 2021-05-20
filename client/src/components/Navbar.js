import React from 'react';
import axios from 'axios'

const imgStyle = {
  width: '35px'
}


export default class Navbar extends React.Component {


  state = {
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

  render() {
    return (
      <>
        <nav>
          <h3>{this.state.avatar ? <a href="/profile"><img className='profileImgNav' src={this.state.avatar} alt="avatar" /></a> : <a href="/profile"><img className='profileImgNav' src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" /></a>}</h3>
          <h3><a href="/dashboard"> <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1200px-Home_Icon.svg.png" alt="Home" /></a></h3>
          <h3><a href="/artistSearch"> <img style={imgStyle} src="https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png" alt="" /></a></h3>
        </nav>
      </>
    )
  }
}