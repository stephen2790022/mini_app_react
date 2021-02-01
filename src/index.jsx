import React from 'react';
import ReactDOM from 'react-dom';
import Clients from './components/Clients';
import 'assets/style.scss';

const App = () => (
  <div className="app">
    <Clients/>
  </div>

);

ReactDOM.render(<App />, document.getElementById('root'));