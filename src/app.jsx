import {useRoutes} from 'hookrouter';

import routes from './routes';

export const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
}