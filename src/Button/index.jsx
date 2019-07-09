/**
 * Author iWuzhi
 * Date 2019/7/9
 **/

import React, { Component } from 'react';
import 'bootstrap/js/dist/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import './index.less';

export default class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { children, type, className } = this.props;

    return (
        <button type="button"
                {...this.props}
                className={`btn btn-${type} gk-rc-button ${className}`}>
          <span className='gk-rc-button-text'>{children}</span>
        </button>
    )
  }
}

Button.defaultProps = {
  type: 'primary',
  children: '点击'
}

Button.propTypes = {
  /**
   * 按钮类型
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  /**
   * 按钮文案
   */
  children: PropTypes.node.isRequired,
}