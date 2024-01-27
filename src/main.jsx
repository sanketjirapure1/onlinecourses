import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './App.css';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './componentes/Pages/Home/Home.jsx';
import Courses from './componentes/Pages/Courses/Courses.jsx';
import Carts from './componentes/Pages/Carts/Carts.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
path:'courses',
element:<Courses/>
      },
      {
        path:'carts',
        element:<Carts/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
