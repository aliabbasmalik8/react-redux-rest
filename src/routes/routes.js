import { lazy } from 'react';

const Login = lazy(() => import('views/Auth/Login'));
const SignUp = lazy(() => import('views/SignUp'));

const appRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
  },
];

export default appRoutes;
