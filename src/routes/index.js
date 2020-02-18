import App from 'containers/App';
import Auth from 'containers/Auth';

const indexRoutes = [
  { path: '/', component: Auth },
  { path: '/', component: App },
];

export default indexRoutes;
