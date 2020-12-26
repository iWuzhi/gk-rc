/**
 * @author iWuzhi
 * @date 2020-12-23 16:46:48
 */
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './Components/CodeBlock'

import Header from './Header';
import Home from './Home';
import Components from './Components';
import Tutorial from './Tutorial';
import About from './About';

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
        <MDXProvider components={components}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/components">
              <Components />
            </Route>
            <Route path='/tutorial'>
              <Tutorial />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </MDXProvider>
      </main>
    </Router>
  )
}

export default App;