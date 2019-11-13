import React, { Component } from "react";
import "./Problem.scss";
import Editor from "../Editor/Editor";

class Problem extends Component {
  componentDidMount() {
    if (this.props.routrProps.match.params.level) {
      this.props.problemOnLoad(
        this.props.routrProps.match.params.level,
        this.props.routrProps.match.params.stage
      );
    }
  }
  render() {
    return (
      <div
        onClick={this.props.closeSideProblemModal}
        className="problem-wrapper"
      >
        <div className="problem-description-wrapper">
          <div className="problem-description">
            <div className="problem-title">
              <div className="problem-title-main">
                {this.props.problemInfo
                  ? this.props.problemInfo.problem.title
                  : ""}
              </div>
              <div className="problem-title-level">
                LEVEL {this.props.routrProps.match.params.level}
              </div>
            </div>
            <div className="problem-info">문제 설명</div>
            <div className="problem-info-description">
              {this.props.problemInfo
                ? this.props.problemInfo.problem.description
                : ""}
            </div>
            {this.props.problemInfo &&
            this.props.problemInfo.problem.descriptionURL ? (
              <img
                className="problem-info-url"
                src={this.props.problemInfo.problem.descriptionURL}
              />
            ) : (
              ""
            )}
            <div className="problem-info">제한 사항 & 입력</div>
            <div className="problem-info-description">
              {this.props.problemInfo &&
                this.props.problemInfo.problem.Limitations.map(
                  (Limitations, i) => {
                    return (
                      <div key={i}>
                        {i + 1}{"."} {Limitations}
                      </div>
                    );
                  }
                )}
            </div>
            <div className="problem-info">입력 예제 </div>
            <div className="problem-info-description">
              {this.props.problemInfo
                ? this.props.problemInfo.problem.input_example1
                : ""}
            </div>
            <div className="problem-info">출력 예제 </div>
            <div className="problem-info-description">
              {this.props.problemInfo
                ? this.props.problemInfo.problem.output_example1
                : ""}
            </div>
            <div className="problem-info">입력 예제 </div>
            <div className="problem-info-description">
              {this.props.problemInfo
                ? this.props.problemInfo.problem.input_example2
                : ""}
            </div>
            <div className="problem-info">출력 예제 </div>
            <div className="problem-info-description">
              {this.props.problemInfo
                ? this.props.problemInfo.problem.output_example2
                : ""}
            </div>
          </div>
        </div>
        <div className="problem-solving-space-wrapper">
          <Editor
            checkCode={this.props.checkCode}
            userName={this.props.userName}
            scoreCode={this.props.scoreCode}
            level={this.props.routrProps.match.params.level}
            stage={this.props.routrProps.match.params.stage}
            problem={
              this.props.problemInfo ? this.props.problemInfo.problem : null
            }
            problemCheck={this.props.problemCheck}
            problemScore={this.props.problemScore}
            submitTime={this.props.submitTime}
            time={this.props.time}
            storgeTime={this.props.storgeTime}
            setStorgeTime={this.props.setStorgeTime}
            endTodayModal={this.props.endTodayModal}
          />
        </div>
      </div>
    );
  }
}

export default Problem;
