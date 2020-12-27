/**
 * author iWuzhi
 * date 2020-12-23 18:12:47
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Button from './What';
import QuickStart from './QuickStart';
import ChangeLog from './ChangeLog';
import FAQ from './FAQ';

import { useStyles } from './style';
interface IProps {}

const Content: React.FC<IProps> = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.content}>
      <Switch>
        <Route path="/tutorial/what">
          <Button />
        </Route>
        <Route path="/tutorial/quick-start">
          <QuickStart />
        </Route>
        <Route path="/tutorial/change-log">
          <ChangeLog />
        </Route>
        <Route path="/tutorial/faq">
          <FAQ />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
