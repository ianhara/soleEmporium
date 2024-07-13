import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'


import App from "./App.jsx"


import Home from './pages/Home';

import Stores from './pages/Stores.jsx';

import Error from './pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: '/stores',
        element: <Stores />
      }, 
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
