import React from 'react';
 import logo from '../../static/logo.svg';
import './index.css';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>App</code> and save to reload.
        </p>
      </div>
    );
  }
}