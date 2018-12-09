import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.register();
