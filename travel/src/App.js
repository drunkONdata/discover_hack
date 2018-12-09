import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import HomePage from './components/HomePage'
import Offers from './components/Offers'
import ToDO from './components/ToDo'
import FlightFound from './components/Flight_Page/FlightFound'
import FlightDetail from './components/Flight_Page/FlightDetail'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/flight' component={FlightDetail} />
            <Route exact path='/flight/match' component={FlightFound} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/offers' component={Offers} />
            <Route exact path='/todo' component={ToDO} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
