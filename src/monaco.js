import React, { useRef, useEffect, useState, Fragment } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import {
  backgroundColor,
  buttonColor,
  textColor,
  monocoLanguages,
  monocoThemes,
  dummyCode
} from "./constant";
import { Dropdown } from "semantic-ui-react";

//For Semanctic to work properly, add this <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> in puclic/index.html file

const HeaderMenu = styled.div`
  width: 100%;
  background-color: ${buttonColor};
  height: 37px;
  display: flex;
  justify-content: flex-start;

  .topicHeaderName {
    color: white !important;
    display: flex;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    width: 100%;
    font-weight: 800;
  }

  div {
    color: ${textColor} !important;
  }
  .ui.dropdown > .text {
    color: ${"white"} !important;
  }
  .ui.selection.dropdown {
    background-color: ${buttonColor};
    border: none !important;
    box-shadow: none !important;
    color: white !important;
    margin: 0px;
    padding: 11px;
    font-size: 12px;
    margin-left: 14px;
    height: 12px;
    min-width: 100px;
  }
  .ui.selection.dropdown .menu {
    background-color: ${backgroundColor};
  }
  .ui.dropdown .menu .item:hover {
    background-color: ${buttonColor}!important;
    color: white !important;
  }
  .ui.selection.dropdown.menu .active.item {
    background-color: red !important;
  }
`;

function MonacoEditor(props) {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("javascript");
  const [optionArray, setOptions] = useState({});
  const editorRef = useRef();
  const containerRef = useRef();
  const optionTemplate = (val, type) => {
    let option = val.map((val) => {
      return { key: val, text: val, value: val.toLowerCase() };
    });
    if (type === "lg")
      setOptions(Object.assign(optionArray, { themeArr: option }));
    else setOptions(Object.assign(optionArray, { langArr: option }));
  };

  useEffect(() => {
    ["lg", "ar"].forEach((val) =>
      val === "lg"
        ? optionTemplate(monocoThemes, val)
        : optionTemplate(monocoLanguages, val)
    );
  }, []);

  function handleEditorDidMount(_, editor, props) {
    editorRef.current = editor;
    listenEditorChanges();
  }
  function listenEditorChanges() {
    let code = "";
    editorRef.current.onDidChangeModelContent((ev) => {
      code = editorRef.current.getValue();
      props.handleEditorData(code);
    });
  }

  const handleDropDownValue = (e, data) => {
    if (data.id === "theme") setTheme(data.value);
    else setLanguage(data.value);
  };
  return (
    <Fragment>
      <HeaderMenu>
        <div>
          <Dropdown
            onChange={handleDropDownValue}
            id="theme"
            placeholder="Theme"
            selection
            options={optionArray.themeArr}
          />
        </div>
        <div>
          <Dropdown
            onChange={handleDropDownValue}
            id="langauge"
            placeholder="Language"
            selection
            options={optionArray.langArr}
          />
        </div>
        {props.topicTitle && (
          <div className="topicHeaderName">
            {props.topicTitle.toUpperCase()}
          </div>
        )}
      </HeaderMenu>
      <Editor
        height="81vh"
        language={language}
        theme={`vs-${theme}`}
        options={{ readOnly: props.editData || false }}
        value={props.codeContent || dummyCode}
        _ref={containerRef}
        editorDidMount={handleEditorDidMount}
      />
    </Fragment>
  );
}

export default MonacoEditor;
