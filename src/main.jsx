import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes.jsx';
import AuthProvider from './provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider client={queryClient}></QueryClientProvider>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
      <section className='font-Dosis'>

        <Toaster />
        <RouterProvider router={router} />
        

      </section>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode >
)

