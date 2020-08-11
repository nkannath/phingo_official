import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cards from './components/Cards';
// import Sheet from './components/Sheet';
import NestedGrid from './components/Grid';
import SongPick from './components/TextField';

ReactDOM.render(
  <React.StrictMode>
    {/* <Cards /> */}
    <NestedGrid />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
