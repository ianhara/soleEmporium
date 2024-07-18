import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import App from "./App.jsx"
import Home from './pages/Home';
import Stores from './pages/Stores.jsx';
import Error from './pages/ErrorPage';
import ProductCardPage from './pages/ProductCardPage.jsx';
import ProductInfo from './pages/ProductInfo.jsx';
import AuthService from './utils/auth.js';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount.jsx';


// Removed stale/expired tokens when running app first time
let storedToken = AuthService.getToken()
if (storedToken && AuthService.isTokenExpired(storedToken)) {
  AuthService.logout()
}


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
      {
        path: '/products/:id',
        element: <ProductInfo />
      }, 
      {
        path: '/productCardPage',
        element: <ProductCardPage />
      },
      {
        path: '/Cart',
        element: <Cart />
      }, 
      {
        path: '/myAccount', 
        element: <MyAccount />
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
