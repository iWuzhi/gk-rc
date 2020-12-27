/**
 * author iWuzhi
 * date 2020-12-23 18:10:44
 */

import React, { useCallback } from 'react';
import { Link, useRouteMatch, useHistory, Redirect } from 'react-router-dom';

import { TreeView, TreeItem } from '@material-ui/lab';
import { Divider, Tabs, Tab, MenuList, MenuItem } from '@material-ui/core';

import { useStyles } from './style';

interface IProps {}

const Nav: React.FC<IProps> = () => {
  const classes = useStyles();
  const match = useRouteMatch('/tutorial/:menu');
  const menu = match?.params?.menu;
  const history = useHistory();
  const onMenuChange = useCallback((e, value) => {
    history.push(`/tutorial/${value}`);
  }, []);
  if (!menu) return <Redirect to="/tutorial/what" />;
  return (
    <nav className={classes.nav}>
      <Tabs orientation="vertical" value={menu || 'button'} onChange={onMenuChange}>
        <Tab label="iWuzhi" value="what" />
        <Tab label="快速上手" value="quick-start" />
        <Tab label="更新日志" value="change-log" />
        <Tab label="FAQ" value="faq" />
      </Tabs>
    </nav>
  );
};

export default Nav;
