/**
 * Author iWuzhi
 * Date 2019/7/9
 **/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default class TextTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      tipStyle: {
        left: 0,
      }
    }
    this.childrenRef = React.createRef();
    this._tipEle = null;
    this._timer = null;
  }
  handleClick = (e) => {
    if (this._timer) {
      clearTimeout( this._timer);
      this._timer = null;
    }
    this.setState({
      show: true,
    })
    this._timer = setTimeout(() => {
      this.setState({
        show: false,
      })
      clearTimeout( this._timer);
      this._timer = null
    }, 1000);
  }
  initTipRef = (ele) => {
    const { tipStyle, show } = this.state;
    if (ele && this.childrenRef.current) {
      this._tipEle = ele;
      let _tipWidth = 0, _childWidth = 0;
      _childWidth = this.childrenRef.current.clientWidth;
      _tipWidth = this._tipEle.clientWidth;
      this.setState({
        tipStyle: {
            ...tipStyle,
          left: (_childWidth - _tipWidth) / 2,
        }
      })
    }
  }
  render() {
    const { children, tip, className, style, offsetTop } = this.props;
    const { show, tipStyle } = this.state;
    let _className = 'gk-rc-text-tip-wrapper';
    _className += ' ' + className;
    let _children = children(this.handleClick, this.childrenRef);
    let _tipStyle = {
      ...tipStyle,
      transform: show ? `translateY(${offsetTop}rem) scale(0.8)` : 'scale(0.3)'
    }
    return (
      <span style={style}
            className={_className}>
        {_children}
        <span className={`gk-rc-text-tip ${show && 'gk-rc-text-tip-show'}`}
              ref={this.initTipRef}
              style={_tipStyle}>
          {tip}
        </span>
      </span>
    )
  }
}

TextTip.defaultProps = {
  tip: '您点击太快了',
  offsetTop: -1.6
}

TextTip.propTypes = {
  tip: PropTypes.string,
  offsetTop: PropTypes.number
}