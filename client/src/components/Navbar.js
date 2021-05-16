import React from 'react';

const imgStyle = {
  width: '35px'
}

const imgStyleProfile = {
  borderRadius: '50%',
  width: '35px'
}

export default function Navbar(props) {


  return (
    <nav>
      <h3><a href="/profile"><img style={imgStyleProfile} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" /> </a></h3>

      <h3> <a href="/dashboard"> <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1200px-Home_Icon.svg.png" alt="Home" />  </a> </h3>

      <h3><a href="/artistSearch"> <img style={imgStyle} src="https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png" alt="" /></a></h3>
    </nav>
  )
}