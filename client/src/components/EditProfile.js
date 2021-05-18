import { Component } from 'react'

export default class EditProfile extends Component {
  render() {
    return (
      <div className='editcontainer'>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="title"> <h3>Name:</h3> </label>
          <input
            type="text"
            id="chosenName"
            name="chosenName"
            value={this.props.chosenName}
            onChange={this.props.handleChange}
          />
          <label htmlFor="avatar"> <h3>Avatar:</h3> </label>
          <input type="file"
            name='avatar' id='avatar'
            onChange={e => this.props.handleFileUpload(e)} />
          <div className='signup'>
            <button type="submit"><strong> Edit Profile</strong></button>
          </div>
        </form>
      </div>
    )
  }
}