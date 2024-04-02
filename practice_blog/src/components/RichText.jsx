import { useEffect } from 'react'
import Quill from 'quill'
export default function Index () {
  const options = {
    debug: 'info',
    modules: {
      toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' }
        ],
        ['link', 'image'],
        ['clean']
      ],
      imagePicker: {
        upload: file => {
          // Your image upload function here
          // Should return a promise that resolves with an image URL
        }
      }
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  }
  useEffect(() => {
    const quill = new Quill('#editor', options)
  }, [])

  return (
    <>
      <div id='editor'>
        <span className='ql-formats'>
          <button className='ql-image'></button>
        </span>
      </div>
    </>
  )
}
