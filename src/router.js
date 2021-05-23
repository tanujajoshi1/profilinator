import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./components/app";
import Markdown from './components/markdown';
const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={App} path="/" exact={true} />
        <Route component={Markdown} path="/markdown" target="_blank" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
