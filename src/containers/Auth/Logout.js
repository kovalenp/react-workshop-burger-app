import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions'

class Logout extends Component {

  containerDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <Redirect to="/" />
    )
  }
}

const mapDispatchToProp = dispatch => {
  return {
    logout: dispatch(actions.authLogout()),
  };
}

export default connect(null, mapDispatchToProp)(Logout);
