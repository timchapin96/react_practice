import { redirect } from 'react-router-dom'
import { useState } from 'react'
import BackButton from '../components/BackButton'

function newBlog () {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: ''
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:3000/blogs/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))
    redirect('/blogs')
  }

  return (
    <div>
      <h1>Hi</h1>
      <form className='blogForm' onSubmit={handleSubmit}>
        <label htmlFor='title'>Blog Title</label>
        <input
          id='title'
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleChange}
        />
        <label htmlFor='body'>Body</label>
        <textarea
          id='body'
          rows='4'
          col='30'
          name='body'
          placeholder='Write text here'
          onChange={handleChange}
        />
        <label htmlFor='author'>Author</label>
        <input
          id='author'
          type='text'
          name='author'
          placeholder='Author'
          onChange={handleChange}
        />
        <button type='submit'>Create</button>
      </form>
      <BackButton />
    </div>
  )
}
export default newBlog
