import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, cache } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import UploadWidget from '../components/UploadWidget'
import BackButton from '../components/BackButton'

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ header: 1 }, { header: 2 }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ['link', 'image', 'video', 'formula'],
  ['clean']
]

const imageHandler = e => {
  console.log('hey')
}
const modules = {
  toolbar: {
    container: toolbarOptions,
    handlers: {
      image: imageHandler // Custom image handler function
    }
  }
}
const cachedModules = cache(modules)

function newBlog () {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const modules = cachedModules(module)
  console.log(modules);

  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dfzu3kr1a',
        uploadPreset: 'wri0ltjw',
        cropping: true
      },
      function (error, res) {
        console.log(res)
      }
    )
  }, [])


  const handleSubmit = event => {
    event.preventDefault()
    console.log('Submit')
    // Handle form submission
  }

  return (
    <div>
      <UploadWidget />
      <ReactQuill
        modules={this.modules}
        theme='snow'
        value={value}
        onChange={setValue}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default newBlog
