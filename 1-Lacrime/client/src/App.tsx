import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftNavbar from './components/Navbar/LeftNavbar';
import TopNavbar from './components/Navbar/TopNavbar';
import Anime from './pages/Anime';
import Graphql from './pages/Graphql';
import Home from './pages/Home';
import Manga from './pages/Manga';
import News from './pages/News';
import Settings from './pages/Settings';

const App: React.FC = () => (
  <div className="mx-auto font-medium text-white bg-gray-900 border-gray-600 fhd:border-4 max-w-screen-fhd">
    <TopNavbar />

    <div className="flex h-full">
      <LeftNavbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/anime/:id">
          <Anime />
        </Route>
        <Route path="/anime">
          <Anime />
        </Route>

        <Route path="/manga/:id">
          <Manga />
        </Route>
        <Route path="/manga">
          <Manga />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/graphql">
          <Graphql />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
