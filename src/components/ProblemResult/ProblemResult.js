import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProblemResult.scss";

import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";

class ProblemResult extends Component {
  editor = null;
  codeMirror = null;
  initializeEditor = value => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "javascript",
      theme: "dracula",
      lineNumbers: true,
      lineWrapping: true,
      value: value
    });
  };
  componentDidMount() {
    this.initializeEditor(this.props.finalCode);
  }
  render() {
    console.log(this.props);
    return (
      <div className="problem-result-wrapper">
        <div className="problem-result-box">
          <div className="code-result-context-wrapper-right">
            {this.props.problemScore &&
              this.props.problemScore.map((score, i) => {
                return (
                  <div className="code-result-wrapper" key={i}>
                    <div className="code-result-context-title" data-set={i}>
                      test case {i + 1}
                    </div>
                    <div className="code-result-context" data-set={i}>
                      Expect :{" "}
                      <strong className="code-result-context-text">
                        {score.expect}
                      </strong>
                    </div>
                    <div className="code-result-context" data-set={i}>
                      Your_answer : <strong>{score.your_answer}</strong>
                    </div>
                    {score.result === "failure" ? (
                      <div className="code-result-context" data-set={i}>
                        Result : <strong className="red">{score.result}</strong>
                      </div>
                    ) : (
                      <div className="code-result-context" data-set={i}>
                        Result :{" "}
                        <strong className="blue">{score.result}</strong>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="code-result-context-wrapper-left">
            <div className="code-result-context">
              Time :{" "}
              <strong>
                {Math.floor(this.props.submitTime / 60)} 분
                {this.props.submitTime % 60} 초
              </strong>
            </div>

            <div
              className="code-result-context"
              ref={ref => (this.editor = ref)}
            ></div>
          </div>
          {this.props.btnText === "다음 풀기" ? (
            <NavLink
              onClick={this.props.closeResultModal}
              className="problem-result-btn"
              to="/"
            >
              {this.props.btnText}
            </NavLink>
          ) : (
            <div
              onClick={this.props.returnResultModal}
              className="problem-result-btn"
              to="/"
            >
              {this.props.btnText}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProblemResult;
