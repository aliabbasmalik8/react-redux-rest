import { lazy } from 'react';

const Login = lazy(() => import('views/Auth/Login'));

const appRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

export default appRoutes;
