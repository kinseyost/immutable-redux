import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from 'actions/userActions.js';

@connect(null,(dispatch) => ({
  addNewUser: bindActionCreators(addUser, dispatch),
}))
export default class Rsvp extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    // TODO get all the user info and send it to addUser.
    const { name } = this.state;
    this.props.addNewUser({ name });
  }

  handleNameChange = (e) => {
    // set state or redux?
    const name = e.target.value;
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <div>
          <span>Name</span>
          <input onChange={ this.handleNameChange }/>
        </div>
        <div>
          <button onClick={ this.handleSubmit }>Submit</button>
        </div>
      </div>
    );
  }
}
