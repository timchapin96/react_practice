import { Link } from "react-router-dom";


export default function Root(params) {
  return (
    <div>
      <h1><Link to={"blogs"}>Blogs</Link></h1>

      <ul>
        <li><Link to ={`blog/1`}>Blog 1</Link></li>
        <li><Link to ={`blog/2`}>Blog 2</Link></li>
      </ul>
    </div>
  )
}
