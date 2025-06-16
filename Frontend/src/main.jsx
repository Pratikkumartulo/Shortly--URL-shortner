import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { routeTree } from './routing/routeTree.js'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const queryClient = new QueryClient()
const router = createRouter({ routeTree,
  context:{
    queryClient,
    store
  }
 })

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
)

