/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import Loading from "./Loading";
import styles from '../styles/Home.module.css'
import { isMobile } from "react-device-detect";
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
  const [show, setShow] = useState(false)
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    setShow(true)
  }
  function showValue() {
    alert(editorRef.current.getValue());
    
  }
  return (
    <>
      {isMobile ? (
        <div className={styles.centerTxt}>Sorry, mobile is not supported at this time.</div>
      ) : (
        <>
          <button onClick={showValue}>{show ? 'Show Value' : ''}</button>
          <Editor
            height="80vh"
            theme="vs-dark"
            defaultLanguage="typescript"
            defaultValue={DemoCode}
            loading={<Loading />}
            onMount={handleEditorDidMount}
          />
        </>
      )}
    </>
  );
};
