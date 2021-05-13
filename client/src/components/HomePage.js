import React from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {

  return (
    <div className='homepage'>
      <div>
        <h1>SomeText</h1>
      </div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  )


}