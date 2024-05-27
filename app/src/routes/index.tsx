import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Products from '../pages/products';
import Sales from '../pages/sales';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/produtos',
    element: <Products />,
  },
  {
    path: '/vendas',
    element: <Sales />,
  }
]);

export default router;
