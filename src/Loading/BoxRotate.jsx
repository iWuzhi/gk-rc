/**
 * Author iWuzhi
 * Date 2019/7/11
 **/

import React, { Component } from 'react';

import './BoxRotate.less';

export default class BoxRotate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span className='gk-rc-loading-box-rotate'>
        <span className='gk-rc-loading-box-rotate-box'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </span>
    )
  }
}