import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './error-page'
import BlogPage from './routes/blogPage'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
