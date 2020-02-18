import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';

const Login = lazy(() => import('views/Auth/Login'));
const SignUp = lazy(() => import('views/SignUp'));

function App() {
  const swithRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/signup' component={SignUp} exact='true' />
        <Route path='/login' component={Login} exact='true' />
      </Switch>
    </Suspense>
  );
  return <ErrorBoundary>{swithRoutes}</ErrorBoundary>;
}

export default App;
