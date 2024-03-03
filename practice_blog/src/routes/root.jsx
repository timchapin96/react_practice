import { Link } from "react-router-dom";


export default function Root(params) {
  return (
    <div>
      <h1><Link to={"blogs"}>Blogs</Link></h1>
    </div>
  )
}
