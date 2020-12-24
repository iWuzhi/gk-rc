/**
 * author iWuzhi
 * date 2020-12-23 18:10:44
 */

import React, { useCallback } from 'react';
import { Link, useRouteMatch, useHistory, Redirect } from 'react-router-dom';

import { TreeView, TreeItem } from '@material-ui/lab';
import { Divider, Tabs, Tab, MenuList, MenuItem  } from '@material-ui/core';

import { useStyles } from './style';

interface IProps {

}

const Nav: React.FC<IProps> = () => {
  const classes = useStyles();
  const match = useRouteMatch('/components/:menu');
  // @ts-ignore
  const menu = match?.params?.menu;
  const history = useHistory();
  const onMenuChange = useCallback((e, value) => {
    history.push(`/components/${value}`);
  }, []);
  if (!menu) return <Redirect to='/components/button' />
  return (
    <nav className={classes.nav}>
      <Tabs
        orientation="vertical"
        value={menu || 'button'}
        onChange={onMenuChange}
      >
        <Tab label="通用" disabled />
        <Tab label="Button" value='button' />
        <Tab label="Icon" value='icon' />
      </Tabs>
    </nav>
  )
}

export default Nav;