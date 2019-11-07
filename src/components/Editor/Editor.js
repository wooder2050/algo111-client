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
      value: null,
      curTime: 0,
      startTime: 0
    };
  }
  timerId = 0;
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
    });
    this.codeMirror.on("change", this.handleChangeMarkdown);
  };

  componentDidMount() {
    if (this.props.problem) {
      if (this.props.problem.parmasNumber === "2") {
        var value = `function solution(n, m) {
        //Your code here..
        var answer = '';
        return answer;
      }`;
        this.initializeEditor(value);
      } else {
        var value = `function solution(n) {
          //Your code here..
          var answer = '';
          return answer;
        }`;
        this.initializeEditor(value);
      }
    }
    const v = new Date().getTime();
    this.setState({ startTime: v });

    this.timerId = setInterval(e => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    const v = new Date().getTime();
    this.setState({ curTime: v });
  }

  handleChangeMarkdown = body => {
    this.cursor = body.getCursor();
    this.setState({
      value: body.doc.getValue()
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
    var time = Math.floor((this.state.curTime - this.state.startTime) / 1000);
    var minutesTime = 0;
    var secondsTime = 0;
    if (minutesTime <= 0 && time < 60) {
      secondsTime = Math.floor(
        (this.state.curTime - this.state.startTime) / 1000
      );
    } else {
      minutesTime = Math.floor(
        Math.floor((this.state.curTime - this.state.startTime) / 1000) / 60
      );
      secondsTime =
        Math.floor((this.state.curTime - this.state.startTime) / 1000) -
        minutesTime * 60;
    }
    return (
      <div className="editor-pane">
        <div className="time-table">
          <div className="timer-text">제한시간</div>
          {secondsTime < 0 ? (
            ""
          ) : (
            <div className="timer">
              {minutesTime > 9 ? minutesTime : "0" + minutesTime} :
              {secondsTime > 9 ? secondsTime : "0" + secondsTime}
            </div>
          )}
        </div>
        <div className="code-example">
          반드시 <strong>함수</strong>를 활용하세요! <br />
          입력 값 = <strong>매개변수</strong>로, 출력 값 ={" "}
          <strong>함수의 리턴 값</strong>으로 활용하세요!
        </div>
        <div
          className="code-editor"
          placeholder="코드를 입력하세요"
          ref={ref => (this.editor = ref)}
        ></div>
        <div className="code-result-wrapper">
          <div className="code-result-title">실행 결과</div>
          <div className="code-result">
            <div className="code-result-scroll">
              {this.props.problemCheck &&
                this.props.problemCheck.map((Check, i) => {
                  return (
                    <div className="code-result-context-wrapper" key={i}>
                      <div className="code-result-context-title" data-set={i}>
                        test case {i + 1}
                      </div>
                      <div className="code-result-context" data-set={i}>
                        Expect : {Check.expect}
                      </div>
                      <div className="code-result-context" data-set={i}>
                        Your_answer : {Check.your_answer}
                      </div>
                      <div className="code-result-context" data-set={i}>
                        Result : {Check.result}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="code-btn-wrapper">
          <div
            onClick={e =>
              this.props.checkCode(this.state.value, this.props.level)
            }
            className="code-btn-execution"
          >
            실행
          </div>
          <div onClick={e =>
              this.props.scoreCode(this.state.value, this.props.level)
            }
            className="code-btn-result">코드 채점하고 제출</div>
        </div>
      </div>
    );
  }
}

export default Editor;
