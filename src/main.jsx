import './index.css'
import ReactDOM from "react-dom/client";
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import React from 'react';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);

