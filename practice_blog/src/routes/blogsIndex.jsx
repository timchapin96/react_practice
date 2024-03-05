import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function blogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = fetch("http://localhost:3000/blogs")
    .then((response) => response.json())
    .then((data) => {
      setBlogs(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    {/* Map over blogs array and render each blog */}
    {blogs.map(blog => (
      <div key={blog.id}>
        <h2><Link to = {`${blog.id}`}>{blog.title}</Link></h2>
        <p>{blog.body}</p>
        <p>{blog.timestamp}</p>
        <p>{blog.author}</p>
      </div>
    ))}
  </div>
  )
}

export default blogsPage;
