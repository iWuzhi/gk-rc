/**
 * author iWuzhi
 * date 2020-12-23 18:03:00
 */

import React from 'react';

import Nav from './Nav';
import Content from './Content';

import { useStyles } from './style';
interface IProps {

}

const Components: React.FC<IProps> = () => {
  const styles = useStyles();
  return (
    <section className={styles.section}>
      <Nav />
      <Content />
    </section>
  )
}

export default Components;