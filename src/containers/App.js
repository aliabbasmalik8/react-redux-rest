import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from 'routes/routes';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header/index';

function App() {
  const swithRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRoutes.map(route => {
          if (route.redirect) {
            return (
              <Redirect from={route.path} to={route.to} key={route.path} />
            );
          }

          return (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
  return (
    <>
      <Header />
      <ErrorBoundary>{swithRoutes}</ErrorBoundary>
    </>
  );
}

export default App;
