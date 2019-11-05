import React, { Component } from "react";
import "./Editor.scss";

import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";

class Editor extends Component {
  editor = null;
  codeMirror = null;

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "javascript",
      theme: "dracula",
      lineNumbers: true,
      lineWrapping: true
    });
  };

  componentDidMount() {
    this.initializeEditor();
  }

  render() {
    return (
      <div className="editor-pane">
        <div className="code-editor" ref={ref => (this.editor = ref)}>
          {`function solution(progresses, speeds) {
    var answer = [];
    return answer;
}`}
        </div>
      </div>
    );
  }
}

export default Editor;
