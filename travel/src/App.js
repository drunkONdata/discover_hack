import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './components/HomePage'
import Offers from './components/Offers'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/offers' component={Offers} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
