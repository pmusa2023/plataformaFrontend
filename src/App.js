import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Pages/Root';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home />,
        id: 'home',
      },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
