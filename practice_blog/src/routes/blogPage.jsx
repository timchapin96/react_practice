import { useParams, Form, redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function blogPage() {
  let {blogId} = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const result = fetch(`http://localhost:3000/blogs/${blogId}`)
    .then((response) => response.json())
    .then((data) => {
      setBlog(data[0]);
      console.log(data[0]);
    })
    .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <h1>{blog.title}</h1>
      <h4>{blog.author}</h4>
      <p>{blog.timestamp}</p>
      <hr/>
      <p>{blog.body}</p>
      <p>{blogId}</p>

      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
      </div>
    </div>

  )
}
