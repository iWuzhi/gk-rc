/**
 * author iWuzhi
 * date 2020-12-23 18:10:44
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import { TreeView, TreeItem } from '@material-ui/lab';
import { Divider  } from '@material-ui/core';

import { useStyles } from './style';

interface IProps {

}

const Nav: React.FC<IProps> = () => {
  const classes = useStyles();
  return (
    <ul className={classes.nav}>
      <li className={classes.group}>通用</li>
      <hr />
      <NavLink to='/components/button'>Button</NavLink>
    </ul>
  )
}

export default Nav;