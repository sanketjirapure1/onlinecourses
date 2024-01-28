import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import './index.css';

const Layout = lazy(() => import('./Layout.jsx'));
const Home = lazy(() => import('./componentes/Pages/Home/Home.jsx'));
const Carts = lazy(() => import('./componentes/Pages/Carts/Carts.jsx'));
const FullstackDevelopment = lazy(() =>
  import('./componentes/Pages/Courses/FullstackDevelopment.jsx'),
);
const AndroidDevelopment = lazy(() =>
  import('./componentes/Pages/Courses/AndroidDevelopment.jsx'),
);
const DevopsDevelopment = lazy(() =>
  import('./componentes/Pages/Courses/DevopsDevelopment.jsx'),
);
const WebDevelopment = lazy(() =>
  import('./componentes/Pages/Courses/WebDevelopment.jsx'),
);
const AiDevelopments = lazy(() =>
  import('./componentes/Pages/Courses/AiDevelopments.jsx'),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/webdevelopment',
        element: <WebDevelopment />,
      },
      {
        path: '/androiddevelopment',
        element: <AndroidDevelopment />,
      },
      {
        path: '/devops',
        element: <DevopsDevelopment />,
      },
      {
        path: '/fullstack',
        element: <FullstackDevelopment />,
      },
      {
        path: '/aidevelopment',
        element: <AiDevelopments />,
      },
      {
        path: 'carts',
        element: <Carts />,
      },
    ],
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Suspense fallback={<div></div>}>
    <App />
  </Suspense>,
);
