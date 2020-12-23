/**
 * author iWuzhi
 * date 2020-12-23 18:03:00
 */

import React from 'react';

import Nav from './Nav';
import Content from './Content';

import './index.css';

interface IProps {

}

const Components: React.FC<IProps> = () => {
  return (
    <section className='d-flex flex-row'>
      <Nav />
      <Content />
    </section>
  )
}

export default Components;