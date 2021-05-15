import React from 'react';

const imgStyle = {
  width: '35px'
}

const imgStyleGlass = {
  width: '30px'
}

export default function Navbar(props) {


  return (
    <nav>
      <h3><a href="/profile">profile</a> </h3>

      <h3> <a href="/dashboard"> <img style={imgStyle} src="https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/home-line-512.png" alt="Home" />  </a> </h3>

      <h3><a href="/artistSearch"> <img style={imgStyleGlass} src="https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png" alt="" /></a></h3>
    </nav>
  )
}