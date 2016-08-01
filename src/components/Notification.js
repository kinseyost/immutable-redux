import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './Notification.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const propTypes = {
  shown: PropTypes.boolean,
  msg: PropTypes.string,
};

@connect(state => ({
  shown: state.getIn(['components, Notification', 'shown']),
  msg: state.getIn(['components, Notification', 'msg']),
}))
export default class Notification extends Component {
  componentDidMount() {
    this.triggerAnimation();
  }
  triggerAnimation = () => {
    this.setState({ shown: true });
  }

  render() {
    const { shown, msg } = this.props;
    return (
      <ReactCSSTransitionGroup>
        <div className={ styles.Notification }>{ msg }</div>
      </ReactCSSTransitionGroup>
   );
  }
}

Notification.propTypes = propTypes;
