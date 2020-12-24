/**
 * @author iWuzhi
 * @date 2020-12-23 16:46:48
 */
// @ts-nocheck
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './Components/CodeBlock'

import Components from './Components';
import Header from './Header';

import './index.css';

const components = {
  code: CodeBlock
}

type APPProps ={}

const App: React.FC<APPProps> = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/components">
          <MDXProvider components={components}>
            <Components />
          </MDXProvider>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App;