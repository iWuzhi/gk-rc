/**
 * @author iWuzhi
 * @date 2020-12-23 16:44:15
 */

import React from 'react';
import ReactDOM from 'react-dom';

import DocApp from './app';

import '@/components/Styles';
import './global.css';

// 挂载元素
const rootEle = document.createElement('div');
rootEle.id = 'root';
document.body.appendChild(rootEle);

ReactDOM.render(<DocApp />, rootEle);
