import React, {useState} from 'react';
import Editor from "./Editor";
import EditorContainer from "./EditorContainer";
import {emitTextChange, onTextData} from '../repository/TextSocket';

const App = () => {
  const [text, setText] = useState('');

  onTextData((data) => {
    console.log('new text', data);
    if(data !== text)
      setText(data);
  });

  return (
      <EditorContainer>
          <Editor onChange={(data) => {
            setText(data);
            emitTextChange(data);
          }}
            data={text}
          />
      </EditorContainer>
  );
};


export default App;
