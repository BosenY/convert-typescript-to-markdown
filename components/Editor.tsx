/*
 * @Author: Boseny yxy43445@gmail.com
 * @Date: 2022-07-06 01:07:05
 * @LastEditors: Boseny yxy43445@gmail.com
 * @LastEditTime: 2022-07-25 19:50:03
 * @FilePath: /convert-typeScript-to-markdown/components/Editor.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
import remarkGfm from "remark-gfm";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { parse } from "@babel/parser";
import {
  isTSInterfaceDeclaration,
  TSInterfaceDeclaration,
  isTSPropertySignature,
  isTSMethodSignature,
  isIdentifier,
  isExportNamedDeclaration,
} from "@babel/types";
import {compile} from '../utils/compile'
const DemoCode = `interface ResolveType {
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
  const [tsStr, setTsStr] = useState(DemoCode);
  function showValue() {
    alert(editorRef.current.getValue());
  }
  function handleMarkdownEditorChange(value, event) {
    setMarkdownStr(value);
  }
  function handleTsEditorChange(value) {
    setTsStr(value);
  }
  function transformTsStr() {
  
    const data = compile(tsStr)
    console.log(data)
    setMarkdownStr(data.markdown)
    // console.log(ast)
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
            <div css={xw` relative`}>
              <button css={xw` bg-blueGray-600 z-50 absolute`} style={{left: '0px', top: '-30px'}} onClick={transformTsStr}>transform</button>
              <Editor
                height="80vh"
                width="30vw"
                theme="vs-dark"
                defaultLanguage="typescript"
                defaultValue={DemoCode}
                loading={<Loading />}
                onMount={handleEditorDidMount}
                onChange={handleTsEditorChange}
              />
            </div>

            {/* <Editor
              height="80vh"
              width="30vw"
              theme="vs-dark"
              defaultLanguage="markdown"
              defaultValue={markdownStr}
              loading={<Loading />}
              onChange={handleMarkdownEditorChange}
              onMount={handleEditorDidMount}
            /> */}
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
