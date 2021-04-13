import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './Main';
// import 'milligram/dist/milligram.min.css';
import './style.css';

const epochSecs = 1618270892 * 1000;
const date = new Date(epochSecs);
console.log(date)
const year = date.getUTCFullYear();
const month = date.getUTCMonth()+1;
const day = date.getUTCDate();
console.log(year, month, day);

function App(props){
  return(
  <div id='app'>
  <Main />
  </div>)
}

render(<App />, document.getElementById('root'));
