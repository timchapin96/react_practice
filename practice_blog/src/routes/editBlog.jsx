import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function editBlog () {
  const [blog, setBlog] = useState({})
  const { blogId } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: ''
  })

  useEffect(() => {
    const response = fetch(`http://localhost:3000/blogs/${blogId}`)
      .then(response => response.json())
      .then(data => {
        setBlog(data[0])
        console.log(formData)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    setFormData({
      ...formData,
      title: blog.title,
      body: blog.body,
      author: blog.author
    })
  }, [blog])

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      navigate(`/blogs/${blogId}`)
    } catch (error) {
      console.error('Error during fetch:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Blog Title</label>
        <input
          id='title'
          type='text'
          name='title'
          defaultValue={blog.title}
          onChange={handleChange}
        />
        <label htmlFor='body'>Body</label>
        <textarea
          id='body'
          rows='4'
          col='30'
          name='body'
          defaultValue={blog.body}
          onChange={handleChange}
        />
        <label htmlFor='author'>Author</label>
        <input
          id='author'
          type='text'
          name='author'
          defaultValue={blog.author}
          onChange={handleChange}
        />
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}
