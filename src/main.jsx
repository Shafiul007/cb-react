import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Products from './Components/Products.jsx';
import Errorpage from './Components/Errorpage.jsx';
import DetailPage from './Components/DetailPage.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import CountContext from './ContextApi/CountContext.jsx';
import AuthProvider from './ContextApi/AuthProvider.jsx';
import Information from './Components/Information';
import PrivateRoute from './Route/PrivateRoute.jsx';
import Cart from './Components/Cart.jsx';
import UpdateCart from './Components/UpdateCart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products",
        loader:()=>fetch("https://fakestoreapi.com/products"),
        element:<Products></Products>
      },
      {
        path:"/products/:productId",
        loader:({params})=>fetch(`https://fakestoreapi.com/products/${params.productId}`),
        element:<PrivateRoute><DetailPage></DetailPage></PrivateRoute>
      },
      {
        path:"/carts",
        //server side theke get er maddhome collection er full data peyeche.
        loader:()=>fetch(`https://cb-react-server.vercel.app/items`),
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path:"/update/:id",
        //server side update er 1st step theke specific id er data peyeche.
        loader:({params})=>fetch(`https://cb-react-server.vercel.app/items/${params.id}`),
        element:<PrivateRoute><UpdateCart></UpdateCart></PrivateRoute>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/info",
        element:<PrivateRoute><Information></Information></PrivateRoute>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <CountContext>
          <RouterProvider router={router} />
        </CountContext>
    </AuthProvider>
    
   
  </StrictMode>,
)
