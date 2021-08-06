//Dependencies
import { Route, Switch } from 'react-router-dom';

//components
import App from './App';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Error404 from './components/Error404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/catalog" component={Catalog} exact />
      <Route component={Error404} />
    </Switch>
  </App>
)

export default AppRoutes;
