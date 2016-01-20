'use strict'

import Reflux from 'reflux';
import Actions from '../actions/actions.js';

const MainStore = Reflux.createStore({
  listenables: Actions,

  init() {

    this.state = {
      title: 'Learning to React'
    }
  },

  getState() {
    return this.state;
  },

  onActionName(name) {
    this.state.name = name;

    this.trigger(this.state);
  }

});

export default MainStore;
