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
      <div className={ styles.FormWrapper }>
        <div>
          <span>Name</span>
          <Input
            onChange={ this.handleNameChange }
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            onChange={ this.handleEmailChange }
          />
        </div>
        <div>
          <span>Phone</span>
          <Input
            type='number'
            className={ styles.AreaCode }
            onChange={ this.handlePhoneChange }
          />
        </div>
        <div>
          <span>Street</span>
          <Input
            onChange={ this.handleStreetChange }
          />
        </div>
        <div>
          <span>City</span>
          <Input
            onChange={ this.handleCityChange }
          />
        </div>
        <div>
          <span>State</span>
          <Input
            onChange={ this.handleStateChange }
          />
        </div>
        <div>
          <span>Zip</span>
          <Input
            onChange={ this.handleZipChange }
          />
        </div>
        <div>
          <Button onClick={ this.handleSubmit }>Submit</Button>
        </div>
      </div>
    );
  }
}

Rsvp.propTypes = propTypes;
