import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class UserInfo extends Component {
  static propTypes = {}

  render() {
    return (
      <form className='form'>
        
        <label for="html">First Name: </label>
        <input type="text" id='firstName' placeholder='First Name'/>
    
    
        <label for="html">Second Name: </label>
        <input type="text" id='secondName' placeholder='Second Name'/>
    
        <label for="html">User-Name: </label>
        <input type="text" id='email' placeholder='User-Name'/>


        <label for="html">Email Address: </label>
        <input type="email" id='email' placeholder='Email'/>


        <label for="html">Hobbies: </label>
        <input type="text" id='hobbies' placeholder='Hobbies'/>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default UserInfo