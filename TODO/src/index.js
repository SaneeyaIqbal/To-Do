import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import { App } from './components';
import reducers from './reducers';
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import TodoList from './components/TodoList';
import Signup from './components/Signup';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/todo" component={TodoList} />

        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root',App)
);

