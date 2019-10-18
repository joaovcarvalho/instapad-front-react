import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const Editor = () => {
  return (
    <CKEditor
      editor={BalloonEditor}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({event, editor, data});
      }}
    />
  )
};

export default Editor;