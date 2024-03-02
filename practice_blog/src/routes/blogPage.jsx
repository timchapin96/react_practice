import {useParams, Form} from 'react-router-dom'

export default function blogPage() {
  let {blogId} = useParams();


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
