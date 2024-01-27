import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './App.css';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './componentes/Pages/Home/Home.jsx';
import Carts from './componentes/Pages/Carts/Carts.jsx';
import FullstackDevelopment from './componentes/Pages/Courses/FullstackDevelopment.jsx';
import AndroidDevelopment from './componentes/Pages/Courses/AndroidDevelopment.jsx';
import DevopsDevelopment from './componentes/Pages/Courses/DevopsDevelopment.jsx';
import AiDevelopments from './componentes/Pages/Courses/AiDevelopments.jsx';
import WebDevelopment from './componentes/Pages/Courses/WebDevelopment.jsx';
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
        // path:'courses',
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
