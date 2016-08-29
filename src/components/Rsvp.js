import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from 'actions/userActions.js';
import { showNotification } from 'actions/componentActions.js';
import styles from './Rsvp.css';
import Input from './Input.js';
import Button from './Button.js';
import Toggle from 'react-toggle';
import { createValidator, validPhone, required, validEmail, maxLength, minLength } from 'utils/validate.js';

const validator = createValidator({
  name: required,
  email: [required, validEmail],
  phone: validPhone,
  zip: [minLength(5), maxLength(5)],
});

const propTypes = {
  addNewUser: PropTypes.func,
  showNotification: PropTypes.func,
};

@connect(null, (dispatch) => ({
  addNewUser: bindActionCreators(addUser, dispatch),
  showNotification: bindActionCreators(showNotification, dispatch),
}))
export default class Rsvp extends Component {
  state = { errors: {}, attending: true };
  inputRefs = {};

  handleSubmit = () => {
    // TODO get all the user info and send it to addUser.
    const { showNotification, addNewUser } = this.props; // eslint-disable-line no-shadow
    const formValues = this.getFormValues();

    const valid = this.validateFields(formValues);

    if (valid) {
      addNewUser(formValues);
      showNotification({ shown: true, msg: 'Successfully submitted RSVP, Thank You', status: 'success' });
      this.clearInputs();
    } else {
      showNotification({ shown: true, msg: 'Please correct errors and resubmit', status: 'warning' });
    }
  }

  getFormValues() {
    const { name, email, phone, street, city, state, zip } = this.inputRefs;
    const { attending } = this.state;
    return {
      name: name.value,
      email: email.value,
      phone: phone.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      attending,
    };
  }

  validateFields = (formValues) => {
    const errors = validator(formValues);
    const valid = Object.keys(errors).length === 0;
    // TODO change this to redux
    this.setState({ errors });
    return valid;
  }

  clearInputs() {
    Object.keys(this.inputRefs).forEach(input => {
      this.inputRefs[input].value = '';
    });
  }

  saveRefsByName = (component) => {
    if (component) {
      const refName = component.getAttribute('name');
      this.inputRefs[refName] = component;
    }
  }

  handleRSVPToggle = (e) => {
    const attending = e.target.checked;
    this.setState({ attending });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className={ styles.FormWrapper }>
        <div className={ styles.Header }>RSVP</div>
        <Input
          placeholder='Name'
          name='name'
          required
          error={ errors.name }
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='Email'
          name='email'
          required
          error={ errors.email }
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='Phone'
          name='phone'
          getInputRef={ this.saveRefsByName }
          error={ errors.phone }
        />
        <Input
          placeholder='Street'
          name='street'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='City'
          name='city'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='State'
          name='state'
          getInputRef={ this.saveRefsByName }
        />
        <Input
          placeholder='Zip'
          error={ errors.zip }
          name='zip'
          getInputRef={ this.saveRefsByName }
        />
        <div className={ styles.ToggleRow }>
          <label>
            <Toggle
              defaultChecked={ this.state.attending }
              onChange={ this.handleRSVPToggle } />
            <span className={ styles.ToggleLabelSpan }>Attending</span>
          </label>
        </div>
        <div>
          <Button onClick={ this.handleSubmit }>Submit</Button>
        </div>
      </div>
    );
  }
}

Rsvp.propTypes = propTypes;
