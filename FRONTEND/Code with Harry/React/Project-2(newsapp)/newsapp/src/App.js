import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar.mjs';
import News from './Components/News.mjs';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News/>
      </div>
    )
  }
}

