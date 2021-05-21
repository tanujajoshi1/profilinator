import React from "react";
import ReactDOM from "react-dom";
import Markdown from './components/markdown'
import { Router, Route, Link,  IndexRoute } from 'react-router-dom'
import App from "./components/app";

import { useHistory } from "react-router-dom";

ReactDOM.render((

<Router history = {useHistory}>
      <Route path = "/" component = {App}>
         
         <Route path = "markdown" component = {Markdown} />
      </Route>
   </Router>


), document.getElementById("root"));