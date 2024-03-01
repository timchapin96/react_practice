import moment from 'moment'
import {useParams} from 'react-router-dom'

export default function blogPage() {
  let {blogId} = useParams();
  const blog = {
    title: "Tokyo Tech Night",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie nunc augue, a ullamcorper leo tincidunt viverra. Ut finibus molestie placerat. Vivamus sem justo, placerat tincidunt erat et, viverra convallis ante. Aliquam dictum quam in leo consectetur, eu tristique ligula mattis. Pellentesque sed sollicitudin risus. Donec vitae euismod nibh. Vestibulum semper ac ligula in tincidunt. Phasellus vulputate leo enim, at gravida felis suscipit in. Cras dapibus leo id sapien blandit, eu ultricies massa dignissim. Maecenas non quam et nisl tristique aliquam sit amet ac eros. Pellentesque sed dignissim ipsum. Ut eget sodales tellus. Donec tellus elit, bibendum a risus efficitur, varius lobortis lorem. Phasellus ac convallis risus. Proin aliquam commodo nisi in pellentesque.",
    timestamp: moment().format("D-MM-YYYY"),
    author: "Tim Chapin",
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <h4>{blog.author}</h4>
      <p>{blog.timestamp}</p>
      <hr/>
      <p>{blog.body}</p>
      <p>{blogId}</p>
    </div>
  )
}
