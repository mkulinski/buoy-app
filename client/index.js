import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import BuoyList from './components/BuoyList';
import Login from './components/Login';
import Favorites from './components/Favorites';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/buoy-list" component={BuoyList} />
      <Route path="/favorites" component={Favorites} />
    </Route>
  </Router>
), document.getElementById('app'));
