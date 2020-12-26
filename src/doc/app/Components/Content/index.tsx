/**
 * author iWuzhi
 * date 2020-12-23 18:12:47
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Button from './Button';
import Icon from './Icon';
import Radio from './Radio';

import { useStyles } from './style';
interface IProps {

}

const Content: React.FC<IProps> = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.content}>
      <Switch>
          <Route path="/components/button">
            <Button />
          </Route>
          <Route path="/components/icon">
            <Icon />
          </Route>
          <Route path="/components/radio">
            <Radio />
          </Route>
        </Switch>
    </div>
  )
}

export default Content;