import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import App from './App';
import Home from './components/SignUpForm.js';
import Users from 'components/ViewUsers.js';
import Uploads from 'components/Uploads.js';
import './styles/reset.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <Route path='Home' component={ Home } />
        <Route path='Users' component={ Users } />
        <Route path='Uploads' component={ Uploads } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
