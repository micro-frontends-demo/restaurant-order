import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Restaurant from './Restaurant';

const App = ({ history }) => (
  <Router history={history || createBrowserHistory()}>
    <Route exact path="/restaurant/:id" component={Restaurant} />
  </Router>
);

export default App;
