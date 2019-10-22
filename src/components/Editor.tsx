import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const Editor = ({ onChange, data }) => {
  return (
    <CKEditor
      editor={BalloonEditor}
      onChange={(event, editor) => {
        const newData = editor.getData();
        onChange(newData);
      }}
      data={data}
    />
  )
};

export default Editor;