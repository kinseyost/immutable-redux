import { SHOW_NOTIFICATION } from 'constants/componentConstants.js';

export function showNotification({ shown, msg, status }) {
  return {
    type: SHOW_NOTIFICATION,
    shown,
    msg,
    status,
  };
}
