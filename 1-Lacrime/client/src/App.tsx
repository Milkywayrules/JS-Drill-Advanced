import React from 'react';
import TopNavbar from './components/Navbar/TopNavbar';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import { ItemField } from './defs/topnavbar';
import formatNavItem from './utils/formatNavItem';

const formattedTopNavbarItems: Array<ItemField> = formatNavItem([
  { name: 'Menu 1' },
  {
    name: 'Menu 2',
    children: ['Child 1.123', 'Child 1.2', 'Child 1.3'],
  },
  { name: 'Medqwnu 3' },
  { name: 'Menu 4' },
  { name: 'Menu 5' },
]);

const App: React.FC = () => (
  <div className="bg-indigo-50">
    <TopNavbar items={formattedTopNavbarItems} />

    <h1 className="text-green-700 bg-orange-50">halo!</h1>
    <h3>Ya-ha</h3>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/anime/:id">{/* <Home /> */}</Route>
      <Route path="/anime">{/* <Home /> */}</Route>

      <Route path="/manga/:id">{/* <Home /> */}</Route>
      <Route path="/manga">{/* <Home /> */}</Route>
    </Switch>
  </div>
);

export default App;
