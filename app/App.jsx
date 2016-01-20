import './styles/_app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<Main />, app);
}
