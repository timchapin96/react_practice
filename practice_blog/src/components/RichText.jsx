import React, { useState, useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function RichTextEditor () {
  const [editorState, setEditorState] = useState();

  const [isEditorReady, setIsEditorReady] = useState(false);

  useEffect(() => {
    setIsEditorReady(true);
  }, []);

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };


  return (
    <div>
      {isEditorReady && (
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleEditorStateChange}
        />
      )}
    </div>
  );
}

export default RichTextEditor
