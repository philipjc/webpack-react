import React from 'react';

const propTypes = { title: React.PropTypes.string };

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
      </div>
    )
  }
}

Header.propTypes = propTypes;
