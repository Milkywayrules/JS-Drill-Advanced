import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import LeftNavbar from './components/Navbar/LeftNavbar';
import TopNavbar from './components/Navbar/TopNavbar';
import Home from './pages/Home';

const buildNavItem = <X extends string, Y extends string[]>(name: X, children?: Y) => {
  const formatted = name.toLowerCase().split(' ').join('-');

  const build = {
    id: formatted,
    text: name,
    slug: formatted,
  };

  if (children && Array.isArray(children)) {
    const buildChild = children.map((childName) => {
      const formattedChild = childName.toLowerCase().split(' ').join('-');
      return {
        id: formattedChild,
        text: childName,
        slug: formattedChild,
      };
    });

    return { ...build, children: buildChild };
  }

  return build;
};

const topNavbarItems: Array<{ name: string; children?: Array<string> }> = [
  { name: 'Menu 1' },
  {
    name: 'Menu 2',
    children: ['Child 1.1', 'Child 1.2', 'Child 1.3'],
  },
  { name: 'Menu 3' },
  { name: 'Menu 4' },
  { name: 'Menu 5' },
];

const topNavbarItem = topNavbarItems.map((item) => {
  if (item.children) return buildNavItem(item.name, item.children);
  return buildNavItem(item.name);
});

const App: React.FC = () => (
  <div className="font-medium text-white bg-gray-900 ">
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
