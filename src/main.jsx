import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Home from './components/body'
import CandidateProfile from './components/Bio.jsx'
import ErrorPage from './components/error-page.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: "bio",
        element: <CandidateProfile />
      },
      {
        path: "election",
        element: <Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={RootRouter} />
    </ChakraProvider>
  </React.StrictMode>,
)
