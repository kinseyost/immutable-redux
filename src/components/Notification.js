import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Notification.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { showNotification } from 'actions/componentActions.js';

const TIMER = 3000;

@connect(state => ({
  shown: state.getIn(['components', 'Notification', 'shown']),
  msg: state.getIn(['components', 'Notification', 'msg']),
}),
dispatch => ({
  hideNotification: bindActionCreators(showNotification, dispatch),
}))
export default class Notification extends Component {
  static propTypes = {
    shown: PropTypes.bool,
    msg: PropTypes.string,
    hideNotification: PropTypes.func,
  };

  componentWillReceiveProps(props) {
    if (!this.props.shown && props.shown) {
      setTimeout(() => this.hideNotification(), TIMER);
    }
  }

  hideNotification = () => {
    this.props.hideNotification({ shown: false, msg: '' });
  }

  render() {
    const { shown, msg } = this.props;
    const className = shown ? styles.NotificationShown : styles.Notification;
    return (
      <ReactCSSTransitionGroup
        className={ className }
        transitionName='Notification'
        transitionEnterTimeout={ 300 }
        transitionLeaveTimeout={ 300 }
      >
      {
        shown &&
          <div>{ msg }</div>
      }
      </ReactCSSTransitionGroup>
   );
  }
}
