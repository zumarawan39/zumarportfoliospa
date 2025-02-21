import './App.css';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load the components
const Spa = React.lazy(() => import('./components/spa/Spa'));
const Projects = React.lazy(() => import('./components/projects/Projects'));

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
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </React.Suspense>
      ),
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/spa',
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Spa />
        </React.Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
