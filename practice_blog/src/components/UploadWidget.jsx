import { useEffect, useRef } from 'react'

const UploadWidget = () => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dfzu3kr1a',
        uploadPreset: 'wri0ltjw',
        cropping: true
      },
      function (error, res) {
        console.log(res);
      }
    )
  }, [])

  return (
    <button onClick={() => {widgetRef.current.open()}}>Upload</button>
  )
}

export default UploadWidget
