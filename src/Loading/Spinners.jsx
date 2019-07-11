/**
 * Author iWuzhi
 * Date 2019/7/11
 **/

import React, { Component } from 'react';

export default class Spinners extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span {...this.props} role="status">
        <span className="sr-only">Loading...</span>
      </span>
    )
  }
}