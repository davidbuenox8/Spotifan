import React from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {

  return (
    <div className='homepage'>
      <div>
        <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" alt="Spotify.logo" />
        <h1>Spotifan.</h1>
      </div>
      <p>Keep track of all new releases from your favorite artists on Spotify</p>
      <div className='logcontainer'>

        <div className='signup'>
          <Link to="/signup"> <strong>Sign Up</strong> </Link>
        </div>
        <div className='signup'>
          <Link to="/login"><strong>Log In</strong></Link>
        </div>

      </div>
    </div>
  )


}