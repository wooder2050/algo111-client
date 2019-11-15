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
    this.props.onLoadNoticeInfo(this.props.userName, this.props.problemChance);
  }
  render() {
    return (
      <>
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
                          {i + 1}
                          {"."} {Limitations}
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
        {this.props.enterProblemModal && (
          <div
            onClick={this.props.closeSideProblemModal}
            className="notice-about-problem-system-wrapper"
          >
            <div className="notice-box">
              <div className="notice-text-wrapper">
                <div className="notice-text">
                  algo111는 하루에 <strong>한 문제 한 시간</strong>, 문제를 풀
                  수 있는 기회는
                  <strong> 5번</strong>으로 제한하고 있습니다.
                </div>
                <div className="notice-text">
                  문제를 푸는 도중에 <strong>페이지를 나가거나</strong>{" "}
                  <strong>새로고침</strong>을 하면 주어진 기회가{" "}
                  <strong>차감</strong>되게 됩니다.
                </div>
              </div>
              <div className="notice-number">
                남은 기회 : <strong>{this.props.problemChance}번</strong>
              </div>
              <div className="notice-close-btn-wrapper">
                <div
                  onClick={this.props.onClickNoticeProblemModal}
                  className="notice-close-btn"
                >
                  닫기
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Problem;
