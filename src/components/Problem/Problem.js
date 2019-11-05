import React, { Component } from "react";
import "./Problem.scss";
import Editor from "../Editor/Editor";

class Problem extends Component {
  render() {
    console.log(this.props.routrProps.match.params.level);
    return (
      <div className="problem-wrapper">
        <div className="problem-description-wrapper">
          <div className="problem-description">
            <div className="problem-title">
              LEVEL {this.props.routrProps.match.params.level} -Array
            </div>
            <div className="problem-title">문제</div>
            <div className="problem-title">
              N이 주어질 때, 다음과 같은 프로그램을 작성해보자.
            </div>
            <div className="problem-title">입력</div>
            <div className="problem-title">
              {`첫째 줄에 자연수 N이 주어진다.(1<=N<=100)`}
            </div>
            <div className="problem-title">입력 예제 </div>
            <div className="problem-title">3</div>
            <div className="problem-title">출력 예제 </div>
            <div className="problem-title">
              1 2 4<br />3 5<br /> 6
            </div>
            <div className="problem-title">입력 예제 </div>
            <div className="problem-title">5</div>
            <div className="problem-title">출력 예제 </div>
            <div className="problem-title">
              1 2 4 7 11
              <br />3 5 8 12
              <br /> 6 9 13
              <br />
              10 14
              <br />
              15
            </div>
          </div>
        </div>
        <div className="problem-solving-space-wrapper">
          <Editor />
        </div>
      </div>
    );
  }
}

export default Problem;
