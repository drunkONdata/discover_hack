import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import HomePage from './components/HomePage'
import Offers from './components/Offers'
import ToDO from './components/ToDo'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/offers' component={Offers} />
            <Route exact path='/todo' component={ToDO} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
