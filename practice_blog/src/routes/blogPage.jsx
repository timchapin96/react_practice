import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'

export default function blogPage () {
  let { blogId } = useParams()
  const [blog, setBlog] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const result = fetch(`http://localhost:3000/blogs/${blogId}`)
      .then(response => response.json())
      .then(data => {
        setBlog(data[0])
      })
      .catch(error => console.log(error))
  }, [])

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        // Handle successful deletion
        console.log('Blog deleted successfully')
        navigate('/blogs')
      } else {
        // Handle unsuccessful deletion
        console.error('Failed to delete blog')
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <h4>{blog.author}</h4>
      <p>{blog.timestamp}</p>
      <hr />
      <p>{blog.body}</p>
      <p>{blogId}</p>

      <div>
        <Link to={'edit'}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <BackButton />
    </div>
  )
}
