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
  status: state.getIn(['components', 'Notification', 'status']),
}),
dispatch => ({
  hideNotification: bindActionCreators(showNotification, dispatch),
}))
export default class Notification extends Component {
  static propTypes = {
    shown: PropTypes.bool,
    msg: PropTypes.string,
    hideNotification: PropTypes.func,
    status: PropTypes.string,
  };

  componentWillReceiveProps(props) {
    if (!this.props.shown && props.shown) {
      setTimeout(() => this.hideNotification(), TIMER);
    }
  }

  hideNotification = () => {
    const { status } = this.props;
    this.props.hideNotification({ shown: false, msg: '', status });
  }

  render() {
    const { shown, msg, status } = this.props;
    let shownClass;
    switch (status) {
      case 'error':
        shownClass = 'NotificationError';
        break;
      case 'warning':
        shownClass = 'NotificationWarning';
        break;
      case 'success':
        shownClass = 'NotificationSuccess';
        break;
      default:
        shownClass = 'NotificationSuccess';
    }
    const className = shown ? styles[`${shownClass}Shown`] : styles[shownClass];
    return (
      <ReactCSSTransitionGroup
        className={ className }
        transitionName='Notification'
        transitionEnterTimeout={ 300 }
        transitionLeaveTimeout={ 300 }
      >
      {
        shown &&
          <div onClick={ this.hideNotification }>{ msg }</div>
      }
      </ReactCSSTransitionGroup>
   );
  }
}
