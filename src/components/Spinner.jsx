import React, { Component } from 'react'
import loading from './spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center sm'>
        <img src={loading} alt="spinner"/>
      </div>
    )
  }
}

export default Spinner