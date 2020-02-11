import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from 'routes/routes';
import ErrorBoundary from "views/ErrorBoundary";
import Header from "views/Header/index";
import Footer from "views/Footer/index";

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
    <React.Fragment>
      <Header />
      <ErrorBoundary>{swithRoutes}</ErrorBoundary>
      <Footer />
    </React.Fragment>
  );
}

export default App;
