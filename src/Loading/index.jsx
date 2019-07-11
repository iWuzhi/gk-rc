/**
 * Author iWuzhi
 * Date 2019/7/10
 **/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LineScalePulseOutRapid from './LineScalePulseOutRapid';
import Spinners from './Spinners';

import './index.less';

export default class Loading extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type } = this.props;
    let LoadingComponent = Spinners;
    switch (type) {
      case 'spinners':
        LoadingComponent =  Spinners;
        break;
      case 'line-scale-pulse-out-rapid':
        LoadingComponent = LineScalePulseOutRapid;
        break;
    }
    return (
      <span className='gk-rc-loading'>
        <LoadingComponent {...this.props} />
      </span>
    )
  }
}

Loading.defaultProps = {
  type: 'spinners',
  size: 'normal',
}

Loading.propTypes = {
  type: PropTypes.oneOf(['spinners', 'line-scale-pulse-out-rapid']),
  size: PropTypes.oneOf(['normal', 'small', 'large']),
}