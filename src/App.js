import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Hello</h1>
        <UserItem />
      </Fragment>
    );
  }
}

export default App;
