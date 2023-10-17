import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Users from './Components/Users';
import Update from './Components/Update';
import AddCoffee from './Components/AddCoffee';
import Coffees from './Components/Coffees';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path: "/coffee",
    element: <Coffees></Coffees>,
    loader: () => fetch('http://localhost:5000/coffee'),
  },
  {
  path: "/update/:id",
  element: <Update></Update>,
  loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
