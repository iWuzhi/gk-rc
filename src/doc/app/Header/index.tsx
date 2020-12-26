/**
 * author iWuzhi
 * date 2020-12-24 20:24:37
 */

import React, { useCallback } from 'react';
import { Divider, Tabs, Tab } from '@material-ui/core'
import { Link, useRouteMatch, useHistory, Redirect } from 'react-router-dom';

import { useStyles } from './style';

interface IProps {

}

const Header: React.FC<IProps> = (props) => {
  const styles = useStyles();
  // @ts-ignore
  const menu = useRouteMatch('/:menu')?.params?.menu;
  const history = useHistory();
  const onMenuChange = useCallback((e, value) => {
    history.push(`/${value}`);
  }, []);
  if (!menu) return <Redirect to='/home' />
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h1>
            <a href="/">
              iWuzhi
            </a>
          </h1>
        </div>
        <div className={styles.nav}>
          <div className={styles.menus}>
          <Tabs value={menu} onChange={onMenuChange}>
            <Tab label='Home' value='home' />
            <Tab label='Tutorial' value='tutorial' />
            <Tab label='Components' value='components'/>
            <Tab label='About' value='about' />
          </Tabs>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;