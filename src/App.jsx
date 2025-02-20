import './App.css';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/spa',
      element:<Spa/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
