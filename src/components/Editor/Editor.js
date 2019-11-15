import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
    this.props.setStorgeTime(this.props.time);
    var value = `function solution(n) {
          //Your code here..
          var answer = '';
          return answer;
        }`;
    this.initializeEditor(value);

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
  scoreCode(value, level, stage, time, userName) {
    this.props.scoreCode(value, level, stage, time, userName);
    const v = new Date().getTime();
    this.setState({ startTime: v });
  }

  handleChangeMarkdown = body => {
    this.setState({
      value: body.doc.getValue()
    });
  };
  render() {

    function timeFunc(curTime, startTime) {
      var time;
      if (Math.floor((curTime - startTime) / 1000 > 0)) {
        time = Math.floor((curTime - startTime) / 1000);
      } else {
        time = 0;
      }

      var minutesTime = 0;
      if (Math.floor(time / 60) > 0) {
        minutesTime = Math.floor(time / 60);
      }
      var secondsTime = 0;
      if (time - minutesTime * 60 > 0) {
        secondsTime = time - minutesTime * 60;
      }
      var timeArray = [];
      timeArray.push(time, minutesTime, secondsTime);
      return timeArray;
    }
    var timeArray = timeFunc(this.state.curTime, this.state.startTime);
    var time = timeArray[0];
    var minutesTime = timeArray[1];
    var secondsTime = timeArray[2];
    return (
      <>
        {time > 3600 ? (
          <div className="end-modal">
            <div className="end-modal-wrapper">
              <p className="end-modal-main-text">
                오늘 제공된 한 시간을 모두 소진하였습니다.
              </p>
              <p className="end-modal-text">내일 00시 이후 다시 도전하세요.</p>
              <NavLink
                onClick={e => this.props.endTodayModal(this.props.userName)}
                className="end-modal-btn"
                to="/"
              >
                나가기
              </NavLink>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="editor-pane">
          <div className="time-table">
            <div className="timer-text">제한시간</div>
            {secondsTime < 0 && this.props.problem ? (
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
            <br />
            <strong>
              {this.props.problem ? this.props.problem.notice : ""}
            </strong>
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
                this.props.checkCode(
                  this.state.value,
                  this.props.level,
                  this.props.stage
                )
              }
              className="code-btn-execution"
            >
              실행
            </div>
            <div
              onClick={e =>
                this.scoreCode(
                  this.state.value,
                  this.props.level,
                  this.props.stage,
                  time,
                  this.props.userName
                )
              }
              className="code-btn-result"
            >
              코드 채점하고 제출
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Editor;
