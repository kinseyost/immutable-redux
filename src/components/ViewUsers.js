import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from 'actions/userActions.js';
import styles from './ViewUsers.css';

const propTypes = {
  getUsers: PropTypes.func,
  users: PropTypes.object,
};

@connect(state => ({
  users: state.getIn(['userInfo', 'users']),
}), dispatch => ({
  getUsers: bindActionCreators(fetchUsers, dispatch),
}))
export default class ViewUsers extends Component {
  componentWillMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;
    const header = (
      <div className={ styles.Header }>
        <div className={ styles.Cell }>Name</div>
        <div className={ styles.Cell }>Email</div>
        <div className={ styles.Cell }>Phone</div>
        <div className={ styles.Cell }>Street</div>
        <div className={ styles.Cell }>City</div>
        <div className={ styles.Cell }>State</div>
        <div className={ styles.Cell }>Zip</div>
      </div>
    );

    const list = users && users.map((user) =>
      <div className={ styles.Row } key={ user.get('_id') }>
        <div className={ styles.Cell }> { user.get('name') }</div>
        <div className={ styles.Cell }> { user.get('email') }</div>
        <div className={ styles.Cell }> { user.get('phone') }</div>
        <div className={ styles.Cell }> { user.get('street') }</div>
        <div className={ styles.Cell }> { user.get('city') }</div>
        <div className={ styles.Cell }> { user.get('state') }</div>
        <div className={ styles.Cell }> { user.get('zip') }</div>
      </div>
    );
    return (
      <div className={ styles.Table }>
      { header }
      { list }
      </div>
    );
  }
}

ViewUsers.propTypes = propTypes;
