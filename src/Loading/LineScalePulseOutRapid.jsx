/**
 * Author iWuzhi
 * Date 2019/7/10
 **/

import React, { Component } from 'react';

import './LineScalePulseOutRapid.less';

export default class LineScalePulseOutRapid extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { size, } = this.props;
    let _className = 'gk-rc-loading-line-scale-pulse-out-rapid';
    size !== 'normal' &&
    (size === 'small' ? (_className += ' gk-rc-loading-line-scale-pulse-out-rapid-sm')
        : (_className += ' gk-rc-loading-line-scale-pulse-out-rapid-lg') );

    return (
      <div className={_className}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}