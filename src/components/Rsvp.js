import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from 'actions/userActions.js';
import styles from './Rsvp.css';
import Input from './Input.js';
import Button from './Button.js';

const propTypes = {
  addNewUser: PropTypes.func,
};

@connect(null, (dispatch) => ({
  addNewUser: bindActionCreators(addUser, dispatch),
}))
export default class Rsvp extends Component {
  handleSubmit = () => {
    // TODO get all the user info and send it to addUser.
    const { name, email, phone, street, city, state, zip } = this.state;
    this.props.addNewUser({ name, email, phone, street, city, state, zip });
  }

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  }
  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  }
  handlePhoneChange = (e) => {
    const phone = e.target.value;
    this.setState({ phone });
  }
  handleStreetChange = (e) => {
    const street = e.target.value;
    this.setState({ street });
  }
  handleCityChange = (e) => {
    const city = e.target.value;
    this.setState({ city });
  }
  handleStateChange = (e) => {
    const state = e.target.value;
    this.setState({ state });
  }
  handleZipChange = (e) => {
    const zip = e.target.value;
    this.setState({ zip });
  }

  render() {
    return (
      <form className={ styles.FormWrapper }>
        <Input
          placeholder='Name'
          onChange={ this.handleNameChange }
        />
        <Input
          placeholder='Email'
          onChange={ this.handleEmailChange }
        />
        <Input
          type='number'
          placeholder='Phone'
          onChange={ this.handlePhoneChange }
        />
        <Input
          placeholder='Street'
          onChange={ this.handleStreetChange }
        />
        <Input
          placeholder='City'
          onChange={ this.handleCityChange }
        />
        <Input
          placeholder='State'
          onChange={ this.handleStateChange }
        />
        <Input
          placeholder='Zip'
          onChange={ this.handleZipChange }
        />
        <div>
          <Button onClick={ this.handleSubmit }>Submit</Button>
        </div>
      </form>
    );
  }
}

Rsvp.propTypes = propTypes;
