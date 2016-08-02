import { SHOW_NOTIFICATION } from 'constants/componentConstants.js';

export function showNotification({ shown, msg }) {
  return {
    type: SHOW_NOTIFICATION,
    shown,
    msg,
  };
}
