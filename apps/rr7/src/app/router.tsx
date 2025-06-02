import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/layout';
import { Bar } from '../pages/bar';
import { Baz } from '../pages/baz';
import { Foo } from '../pages/foo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'foo', element: <Foo /> },
      { path: 'foo/bar', element: <Bar /> },
      { path: 'foo/bar/baz', element: <Baz /> },
    ],
  },
]);
