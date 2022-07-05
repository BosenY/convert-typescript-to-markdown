/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Loading from './Loading'
const DemoCode = `interface ResolveType {
  /**
   * return resolve
   */
  success: boolean;
  action: 'link' | 'modal' | 'easyShare' | 'toast' | 'subscribe' | 'addToHome';
  message?: any;
}`;

export default () => {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function showValue() {
    alert(editorRef.current.getValue());
  }
  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="100%"
        theme="vs-dark"
        defaultLanguage="typescript"
        defaultValue={DemoCode}
        loading={<Loading />}
        onMount={handleEditorDidMount}
      />
    </>
  );
};
