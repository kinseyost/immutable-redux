import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import App from './App';
import Rsvp from './components/Rsvp.js';
import ViewUsers from './components/ViewUsers.js';
// styles reset
import './styles/reset.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Rsvp } />
        <Route path='rsvp' component={ Rsvp } />
        <Route path='viewUsers' component={ ViewUsers } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
