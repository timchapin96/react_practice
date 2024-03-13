import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './error-page'
import BlogPage from './routes/blogPage'
import BlogsIndex from './routes/blogsIndex'
import BlogsNew from './routes/blogNew'
import EditBlog from './routes/editBlog'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/blogs/:blogId',
    element: <BlogPage />
  },
  {
    path: '/blogs',
    element: <BlogsIndex />
  },
  {
    path: '/blogs/new',
    element: <BlogsNew />
  },
  { path: 'blogs/:blogId/edit', element: <EditBlog /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
