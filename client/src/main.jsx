import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.jsx"


import Home from './pages/Home';
import Explore from './pages/Explore';
import Stores from './pages/Stores';
import Login from './pages/Login';
import Signup from './pages/Signup';



const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NoMatch />,
      children: [
        {
          index: true,
          element: <Home />
        },{
            path: '/explore',
            element: <Explore />
          }, {
          path: '/stores',
          element: <Stores />
        }, {
          path: '/login',
          element: <Login />
        }, {
          path: '/signup',
          element: <Signup />
        },  
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  