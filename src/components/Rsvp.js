import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from 'actions/userActions.js';
import styles from './Rsvp.css';
import Input from './Input.js';
import Button from './Button.js';
import { findDOMNode } from 'react-dom';

const propTypes = {
  addNewUser: PropTypes.func,
};

@connect(null, (dispatch) => ({
  addNewUser: bindActionCreators(addUser, dispatch),
}))
export default class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
  }

  handleSubmit = () => {
    // TODO get all the user info and send it to addUser.
    const { name, email, phone, street, city, state, zip } = this.inputRefs;
    this.props.addNewUser({
      name: name.value,
      email: email.value,
      phone: phone.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
    });
    Object.keys(this.inputRefs).forEach(input => {
      input.value = '';
    });
  }

  saveRefsByName = (component) => {
    if (component) {
      const refName = component.getAttribute('placeholder').toLowerCase();
      this.inputRefs[refName] = component;
    }
  }

  render() {
    return (
      <div className={ styles.FormWrapper }>
        <div className={ styles.Header }>RSVP</div>
        <Input
          placeholder='Name'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='Email'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          type='number'
          placeholder='Phone'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='Street'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='City'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='State'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='Zip'
          getInputRef={ this.saveRefsByName }
        />
        <div>
          <Button onClick={ this.handleSubmit }>Submit</Button>
        </div>
      </div>
    );
  }
}

Rsvp.propTypes = propTypes;
