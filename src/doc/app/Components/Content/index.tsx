/**
 * author iWuzhi
 * date 2020-12-23 18:12:47
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useStyles } from './style';
import useComponents from '../hooks/useComponents';

interface IProps {}

const Content: React.FC<IProps> = () => {
  const classNames = useStyles();
  const components = useComponents();
  return (
    <div className={classNames.content}>
      <Switch>
          {
            components.map(({ name, component: Component}) => {
              return (
                <Route key={name} path={`/components/${name.toLowerCase()}`}>
                  <Component />
                </Route>
              )
            })
          }
        </Switch>
    </div>
  )
}

export default Content;