/* 
应用根组件
*/
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

export default class App extends Component {
  /*  handleClick = () =>{
    message.success('click！');
  } */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 只匹配其中一个 */}
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
    /*  return (
      <Button type="primary" onClick={this.handleClick}>点击</Button>
    ); */
  }
}
/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src_app={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src_app/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
