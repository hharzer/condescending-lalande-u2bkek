import React, { useState } from "react";
import "./styles.css";
import MonacoEditor from "./monaco";

function App() {
  const [codeEditorData, setCodeEditorData] = useState("");
  const handleEditorData = (data) => {
    setCodeEditorData(data);
  };
  return (
    <div className="App">
      <h1>Monaco Editor</h1>
      <MonacoEditor handleEditorData={handleEditorData} />
    </div>
  );
}

export default App;
