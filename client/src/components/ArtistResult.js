import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%'
}

export default class ArtistResult extends React.Component {
  render() {
    return (
      <Link key={this.props.result.id} to={`/artist/${this.props.result.id}`}>
        <div className='artistResult'>
          {this.props.result.images[0] ? <img style={imgStyle} src={this.props.result.images[0].url} alt={this.props.result.name} /> : <img style={imgStyle} src='https://freesvg.org/img/abstract-user-flat-3.png' alt="" />}
          <h3>{this.props.result.name}</h3>
        </div>
      </Link>
    )
  }
}