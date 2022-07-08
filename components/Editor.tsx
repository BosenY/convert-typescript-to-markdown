/* eslint-disable react/no-children-prop */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import Loading from "./Loading";
import styles from "../styles/Home.module.css";
import { isMobile } from "react-device-detect";
import xw from "xwind";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from 'remark-gfm'
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
const DemoCode = `interface ResolveType {
  /**
   * return resolve
   */
  success: boolean;
  action: 'link' | 'modal' | 'easyShare' | 'toast' | 'subscribe' | 'addToHome';
  message?: any;
}`;
const DemoMarkdown = `# test`;

export default () => {
  const editorRef = useRef(null);
  const [show, setShow] = useState(false);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    setShow(true);
  }
  const [markdownStr, setMarkdownStr] = useState("");
  function showValue() {
    alert(editorRef.current.getValue());
  }
  function handleMarkdownEditorChange(value, event) {
    setMarkdownStr(value);
  }
  return (
    <>
      {isMobile ? (
        <div className={styles.centerTxt}>
          Sorry, mobile is not supported at this time.
        </div>
      ) : (
        <>
          <div css={xw`flex justify-around`}>
            <Editor
              height="80vh"
              width="30vw"
              theme="vs-dark"
              defaultLanguage="typescript"
              defaultValue={DemoCode}
              loading={<Loading />}
              onMount={handleEditorDidMount}
            />
            <Editor
              height="80vh"
              width="30vw"
              theme="vs-dark"
              defaultLanguage="markdown"
              defaultValue={markdownStr}
              loading={<Loading />}
              onChange={handleMarkdownEditorChange}
              onMount={handleEditorDidMount}
            />
            <div css={xw`border`} style={{ width: "30vw" }}>
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
                remarkPlugins={[remarkGfm]}
              >
                {markdownStr}
              </ReactMarkdown>
            </div>
          </div>
        </>
      )}
    </>
  );
};
