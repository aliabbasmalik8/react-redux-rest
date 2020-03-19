import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from 'api/auth';
import { authenticateUser, unAuthenticateUser } from 'actions/auth';
import appRoutes from 'routes/routes';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header/index';

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem('taskerToken')) {
    dispatch(user(authenticateUser, unAuthenticateUser));
  }
  const swithRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRoutes.map(route => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
  return (
    <ErrorBoundary>
      <Header />
      {swithRoutes}
    </ErrorBoundary>
  );
}

export default withRouter(App);
