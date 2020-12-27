/**
 * author iWuzhi
 * date 2020-12-23 18:10:44
 */

// @ts-nocheck
import React, { useCallback } from 'react';
import { Link, useRouteMatch, useHistory, Redirect } from 'react-router-dom';

import { TreeView, TreeItem } from '@material-ui/lab';
import { Divider, Tabs, Tab, MenuList, MenuItem  } from '@material-ui/core';

import { useStyles } from './style';
import routes from 'doc/app/routes.json';

const componentRoutes = routes.Components || [];

const groupRoutes = componentRoutes.reduce((acc, cur, index) => {
  for (let i = 0; i < acc[i]?.length || 0; i ++) {
    if (acc[i] && acc[i][0]?.type === cur.type) {
      acc[i].push(cur);
      return acc;
    } 
  }
  acc[index] = [cur];
  return acc;
}, []) 

interface IProps {}

const Nav: React.FC<IProps> = () => {
  const classes = useStyles();
  const match = useRouteMatch('/components/:menu');
  // @ts-ignore
  const menu = match?.params?.menu;
  const history = useHistory();
  const onMenuChange = useCallback((e, value) => {
    history.push(`/components/${value}`);
  }, []);
  if (!menu) return <Redirect to='/components/summary' />

  const tabsChildren = [<Tab key='summary' label='概述' value='summary' />];
  tabsChildren.push(groupRoutes.map(group => {
    const tabs =  [<Tab label={group[0]?.type} disabled />];
    tabs.push(group.map(({ title, name: _name, subtitle }) => {
      const name = _name || title;
      return <Tab key={name} label={name + ' ' + subtitle} value={name.toLowerCase()} />
    }));
    return tabs;
  }));
  return (
    <nav className={classes.nav}>
      <Tabs
        orientation="vertical"
        value={menu || 'summary'}
        onChange={onMenuChange}
      >
        {tabsChildren}
      </Tabs>
    </nav>
  )
}

export default Nav;