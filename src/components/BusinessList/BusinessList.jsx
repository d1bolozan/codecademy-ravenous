import React, { Component } from 'react'
import Business from '../Business/Business';
import './BusinessList.css';

export default class BusinessList extends Component {
  render() {
    return (
      <div className='businessList'>
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    )
  }
}
