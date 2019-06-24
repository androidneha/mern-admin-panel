import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/layout/NotFound";
import Login from "./components/auth/Login";
import Dashboard from "./components/pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store";

import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/material-icons/iconfont/material-icons.css';
import '../node_modules/materialize-css/dist/js/materialize.js';

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <Switch>
                      <Route exact path="/" component={Login} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/dashboard" component={Dashboard} />
                      <Route path='*' component={NotFound} />
                  </Switch>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
