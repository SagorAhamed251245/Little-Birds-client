import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes.jsx';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <section className='font-Dosis'>
      <Toaster />
        <RouterProvider router={router} />
      </section>
    </AuthProvider>
  </React.StrictMode>,
)
