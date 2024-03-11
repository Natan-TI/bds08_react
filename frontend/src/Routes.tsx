import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import GitSearch from './pages/GitSearch';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitsearch">
         <GitSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
