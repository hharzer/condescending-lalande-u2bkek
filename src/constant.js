//Color Pallets

export const backgroundColor = "#BFE5E2";
export const buttonColor = "#2647A3";
export const greyColor = "#2647A3";
export const codeColor = "#333";
export const textColor = "#2647A3";

export const monocoLanguages = [
  "apex",
  "azcli",
  "bat",
  "c",
  "clojure",
  "coffeescript",
  "cpp",
  "csharp",
  "csp",
  "css",
  "dockerfile",
  "fsharp",
  "go",
  "graphql",
  "handlebars",
  "html",
  "ini",
  "java",
  "javascript",
  "json",
  "kotlin",
  "less",
  "lua",
  "markdown",
  "msdax",
  "mysql",
  "objective-c",
  "pascal",
  "perl",
  "pgsql",
  "php",
  "plaintext",
  "postiats",
  "powerquery",
  "powershell",
  "pug",
  "python",
  "r",
  "razor",
  "redis",
  "redshift",
  "ruby",
  "rust",
  "sb",
  "scheme",
  "scss",
  "shell",
  "sol",
  "sql",
  "st",
  "swift",
  "tcl",
  "typescript",
  "vb",
  "xml",
  "yaml"
];

export const dummyCode = `import React, { useRef, useState, Fragment } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import {
  backgroundColor,
  buttonColor,
  textColor,
  monocoLanguages,
  monocoThemes
} from "./constant";
import { Dropdown } from "semantic-ui-react";

const HeaderMenu = styled.div"
  width: 100%;
  background-color: white;
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
    color: white !important;
  }
  .ui.dropdown > .text {
    color: white !important;
  }
  .ui.selection.dropdown {
    background-color: white;
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
    background-color: white;
  }
  .ui.dropdown .menu .item:hover {
    background-color: white!important;
    color: white !important;
  }
  .ui.selection.dropdown.menu .active.item {
    background-color: red !important;
  }
";

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

  function handleEditorDidMount(_, editor, props) {
    editorRef.current = editor;
    listenEditorChanges();
    ["lg", "ar"].forEach((val) =>
      val === "lg"
        ? optionTemplate(monocoThemes, val)
        : optionTemplate(monocoLanguages, val)
    );
  }
  function listenEditorChanges() {
    let code = "";
    editorRef.current.onDidChangeModelContent((ev) => {
      code = editorRef.current.getValue();
      props.handleEditorData(code, "code");
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
        theme={theme}
        options={{ readOnly: props.editData || false }}
        value={props.codeContent || "//write your code here"}
        _ref={containerRef}
        editorDidMount={handleEditorDidMount}
      />
    </Fragment>
  );
}

export default MonacoEditor;
 
data import React, { useRef, useState, Fragment } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import {
  backgroundColor,
  buttonColor,
  textColor,
  monocoLanguages,
  monocoThemes
} from "./constant";
import { Dropdown } from "semantic-ui-react";

const HeaderMenu = styled.div"
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
    color: white !important;
  }
  .ui.dropdown > .text {
    color: white !important;
  }
  .ui.selection.dropdown {
    background-color: white;
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
    background-color: white;
  }
  .ui.dropdown .menu .item:hover {
    background-color: white!important;
    color: white !important;
  }
  .ui.selection.dropdown.menu .active.item {
    background-color: red !important;
  }
";

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

  function handleEditorDidMount(_, editor, props) {
    editorRef.current = editor;
    listenEditorChanges();
    ["lg", "ar"].forEach((val) =>
      val === "lg"
        ? optionTemplate(monocoThemes, val)
        : optionTemplate(monocoLanguages, val)
    );
  }
  function listenEditorChanges() {
    let code = "";
    editorRef.current.onDidChangeModelContent((ev) => {
      code = editorRef.current.getValue();
      props.handleEditorData(code, "code");
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
        theme={"theme"}
        options={{ readOnly: props.editData || false }}
        value={props.codeContent || "//write your code here"}
        _ref={containerRef}
        editorDidMount={handleEditorDidMount}
      />
    </Fragment>
  );
}

export default MonacoEditor;`;

export const monocoThemes = ["Dark", "Light"];
