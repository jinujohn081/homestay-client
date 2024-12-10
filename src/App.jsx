import React from 'react';

import HomePage from './routes/homePage/homePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from './routes/listPage/listPage';
import Layout from './routes/layout/layout';
import ErrorPage from './routes/errorPage/errorPage';
import Login from './routes/login/login';
import SinglePage from './routes/singlePage/singlePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,

      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
