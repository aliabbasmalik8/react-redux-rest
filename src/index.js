import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import indexRoutes from 'routes/index';
// import * as serviceWorker from 'serviceWorker';
import configureStore from 'configureStore';
import './styles.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {indexRoutes.map(prop => (
          <Route path={prop.path} component={prop.component} key={prop.path} />
        ))}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.register();
