import './App.css';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Projects from './components/projects/Projects';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Skill from './components/skills/Skill';
import Spa from './components/spa/Spa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/clients',
      element: <Clients />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/skill',
      element: <Skill/>
    },
    {
      path: '/spa',
      element:<Spa/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
