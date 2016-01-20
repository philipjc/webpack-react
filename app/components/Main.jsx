import React from 'react';
import Header from './Header.jsx';

import MainStore from '../stores/MainStore.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = MainStore.getState();
  }

  

  render() {
    return (
      <Header title={ this.state.title } />
    )
  }
}

// Main.propTypes = { title: React.PropTypes.string };
