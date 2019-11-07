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
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  editor = null;
  codeMirror = null;
  cursor = null;

  initializeEditor = value => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "javascript",
      theme: "dracula",
      lineNumbers: true,
      lineWrapping: true,
      value: value
    })
    this.codeMirror.on("change", this.handleChangeMarkdown);
  };

  componentDidMount() {
    if (this.props.problem) {
      this.initializeEditor(this.props.problem.initialValue);
    } else {
      var value = `function solution(n) {
        //Your code here..
        var answer = '';
        return answer;
      }`;
      this.initializeEditor(value);
    }
  }

  handleChangeMarkdown = body => {
    this.cursor = body.getCursor();
    this.setState({
      value: body.getValue()
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.markdown !== this.props.markdown) {
  //     const { codeMirror, cursor } = this;

  //     if (!codeMirror) return;
  //     codeMirror.setValue(this.props.markdown);

  //     if (!cursor) return;
  //     codeMirror.setCursor(cursor);
  //   }
  // }
  render() {
    return (
      <div className="editor-pane">
        <div className="code-example">
          반드시 <strong>함수</strong>를 활용하세요! <br />
          입력 값 = <strong>매개변수</strong>로, 출력 값 ={" "}
          <strong>함수의 리턴 값</strong>으로
          <br />
          활용하세요!
        </div>
        <div
          className="code-editor"
          placeholder="코드를 입력하세요"
          ref={ref => (this.editor = ref)}
        ></div>
        <div className="code-result-wrapper">
          <div className="code-result-title">실행 결과</div>
          <div className="code-result"></div>
        </div>
        <div className="code-btn-wrapper">
          <div
            onClick={e =>
              this.props.submitCode(this.state.value, this.props.level)
            }
            className="code-btn-execution"
          >
            실행
          </div>
          <div className="code-btn-result">코드 채점하고 제출</div>
        </div>
      </div>
    );
  }
}

export default Editor;
