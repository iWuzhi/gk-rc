/**
 * @author iWuzhi
 * @date 2020-12-23 16:46:48
 */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './Components/CodeBlock';

import Header from './Header';
import Home from './Home/index.mdx';
import Components from './Components';
import Tutorial from './Tutorial';
import About from './About/index.mdx';

import './index.css';

const components = {
  code: CodeBlock,
};

type APPProps = {};

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
            <Route path="/tutorial">
              <Tutorial />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </MDXProvider>
      </main>
    </Router>
  );
};

export default App;
