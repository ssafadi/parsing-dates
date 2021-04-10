import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './Main';
import './style.css';

function App(props){
  return(
  <div id='app'>
  <Main />
  </div>)
}

render(<App />, document.getElementById('root'));