import {useParams, Form, useLocation} from 'react-router-dom'

export default function blogPage() {
  let {blogId} = useParams();
  const location = useLocation();
  const { blogPost } = location.state;


  return (
    <div>
      <h1>{blogPost.title}</h1>
      <h4>{blogPost.author}</h4>
      <p>{blogPost.timestamp}</p>
      <hr/>
      <p>{blogPost.body}</p>
      <p>{blogId}</p>

      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
      </div>
    </div>

  )
}
