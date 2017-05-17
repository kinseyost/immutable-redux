import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import App from './App';
import Home from './components/SignUpForm.js';
import Gallery from './components/Gallery.js';
import Behavior from './components/Behavior.js';
import Diet from './components/Diet.js';
import Habitat from './components/Habitat.js';
import Mating from './components/Mating.js';
import Biology from './components/Biology.js';
import './styles/reset.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <Route path='Home' component={ Home } />
        <Route path='Gallery' component={ Gallery } />
        <Route path='Behavior' component={ Behavior } />
        <Route path='Diet' component={ Diet } />
        <Route path='Habitat' component={ Habitat } />
        <Route path='Mating' component={ Mating } />
        <Route path='Biology' component={ Biology } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
