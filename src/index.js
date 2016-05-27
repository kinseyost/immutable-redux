import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import App from './App';
import Page1 from './components/Page1.js';
import Page2 from './components/Page2.js';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="page1" component={ Page1 } />
        <Route path="page2" component={ Page2 } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
