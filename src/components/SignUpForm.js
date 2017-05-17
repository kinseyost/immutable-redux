import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from 'actions/userActions.js';
import { showNotification } from 'actions/componentActions.js';
import styles from './SignUpForm.css';
import logo from 'images/ligerHome.png';

const propTypes = {
  addNewUser: PropTypes.func,
  showNotification: PropTypes.func,
};

@connect(null, (dispatch) => ({
  addNewUser: bindActionCreators(addUser, dispatch),
  showNotification: bindActionCreators(showNotification, dispatch),
}))
export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <img
          src={ logo }
        />
      </div>
    );
  }
}

SignUpForm.propTypes = propTypes;
