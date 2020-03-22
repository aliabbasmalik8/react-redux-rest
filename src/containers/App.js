import React, { Suspense, useEffect } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from 'api/auth';
import { users } from 'api/user';
import { authenticateUser, unAuthenticateUser } from 'actions/auth';
import { getAllUsers, getAllUsersFailure } from 'actions/user';
import appRoutes from 'routes/routes';
import RouteWrapper from 'components/PrivtaeRoute';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header/index';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(users(getAllUsers, getAllUsersFailure));
    if (localStorage.getItem('taskerToken')) {
      dispatch(user(authenticateUser, unAuthenticateUser));
    }
  }, [dispatch]);
  const swithRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRoutes.map(route => (
          <RouteWrapper
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
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
