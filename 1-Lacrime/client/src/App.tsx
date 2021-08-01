import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftNavbar from './components/Navbar/LeftNavbar';
import TopNavbar from './components/Navbar/TopNavbar';
import Home from './pages/Home';

const App: React.FC = () => (
  <div className="mx-auto font-medium text-white bg-gray-900 border-gray-600 fhd:border-4 max-w-screen-fhd">
    <TopNavbar />

    <div className="flex h-full">
      <LeftNavbar />

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
  </div>
);

export default App;
