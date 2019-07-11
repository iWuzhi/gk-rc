/**
 * Author iWuzhi
 * Date 2019/7/9
 **/

import React, { Component } from 'react';
import 'bootstrap/js/dist/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import './index.less';

import TextTip from '../TextTip/index';
import Loading from '../Loading/index';

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.__violenceTimer = null;
    this.__violenceLimit = 3000;
  }
  handleClick = (e, startShow) => {
    const { disabled, onClick, violenceDisabled, loading } = this.props;
    e.preventDefault();
    e.stopPropagation();
    if (disabled || loading) return;
    if (!violenceDisabled) return onClick(e);
    if (this.__violenceTimer === null) {
      onClick(e);
      this.__violenceTimer = setTimeout(() => {
        clearTimeout(this.__violenceTimer);
        this.__violenceTimer = null;
      }, this.__violenceLimit)
    } else {
      startShow();
    }
  }
  render() {
    const { children, type, className, block , htmlType, style, disabled, loading, ghost, size } = this.props;
    let _className = `btn`;
    ghost ? (_className += ` btn-outline-${type} gk-rc-button-outline`) : (_className += ` btn-${type}`);
    size !== 'normal' && (size === 'small' ? (_className += ' btn-sm') : (_className += ' btn-lg') );
    _className += ' gk-rc-button';
    block && ( _className += ' gk-rc-button-block');
    (loading || disabled) && (_className += ' gk-rc-button-disabled');
    _className += ' ' + className;
    return (
      <TextTip style={{
        display: block ? 'block' : 'inline-block',
      }} offsetTop={size === 'large' ? -4.6 : -3.6}>
        {
          (startShow, ref) => {
            return (
              <button type={htmlType}
                      style={style}
                      onClick={(e) => {
                        this.handleClick(e, startShow)
                      }}
                      className={_className}
                      disabled={disabled || loading}
                      ref={ref}>
                <span className='gk-rc-button-text'>
                  { loading ? <Loading type='spinners' className='spinner-border spinner-border-sm'/> : null}
                  {children}
                </span>
              </button>
            )
          }
        }
      </TextTip>
    )
  }
}

Button.defaultProps = {
  type: 'primary',
  children: '点击',
  onClick: () => {},
  disabled: false,
  block: false,
  className: '',
  htmlType: 'button',
  loading: false,
  ghost: false,
  size: 'normal',
  violenceDisabled: true,
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
  /**
   * 按钮点击事件
   */
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  loading: PropTypes.bool,
  htmlType: PropTypes.string,
  ghost: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  /**
   * 防暴力点击
   */
  violenceDisabled: PropTypes.bool,
}