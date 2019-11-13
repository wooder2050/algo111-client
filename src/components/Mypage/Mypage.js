import React, { Component } from "react";
import { Progress } from "antd";
import "./Mypage.scss";
import "antd/dist/antd.css";

class Mypage extends Component {
  render() {
    var myCode = [];
    console.log(this.props);
    if (this.props.codeAll) {
      for (var i = 0; i < this.props.codeAll.length; i++) {
        if (this.props.codeAll[i].userName === this.props.userName) {
          myCode.push(this.props.codeAll[i]);
        }
        // console.log(this.props.codeAll[i].userName);
      }
    }
    console.log(myCode);
    return (
      <div
        onClick={this.props.closeSideProblemModal}
        className="mypage-wrapper"
      >
        <div className="mypage-content">
          <div className="mypage-info-header">
            <div className="mypage-profile">
              <img
                className="mypage-profile-img"
                src={this.props.userPictureUrl}
              />
            </div>
            <div className="mypage-header-name">
              {this.props.userName}님, 환영합니다.
            </div>
            <div className="mypage-header-info">
              문제 코드를 다시 보면서 나에게 맞는 방식으로 알고리즘 문제를
              해결할 수 있습니다.
            </div>
          </div>
          <div className="mypage-info-box-wrapper">
            <div className="mypage-info-box">
              <div className="mypage-info-box-inner">
                <div className="mypage-level">
                  <div className="mypage-level-now">
                    현재 레벨 <strong>{this.props.userLevel}</strong>
                  </div>
                  <div className="mypage-level-info">
                    전체{" "}
                    {this.props.levelAll ? this.props.levelAll.length : "0"}{" "}
                    레벨 중에 {this.props.userLevel} 레벨 진행 중입니다.
                  </div>
                  <div className="mypage-level-info-detail">
                    {this.props.userLevel}레벨에선{" "}
                    <strong>
                      {`"`}
                      {this.props.levelAll
                        ? this.props.levelAll[this.props.userLevel - 1]
                            .description
                        : ""}
                      {`"`}
                    </strong>{" "}
                    를 진행합니다.
                  </div>
                </div>
                <div className="mypage-level-graph">
                  {this.props.levelAll && (
                    <Progress
                      type="circle"
                      percent={
                        (this.props.userLevel / this.props.levelAll.length) *
                        100
                      }
                    />
                  )}
                </div>
              </div>
              <div className="mypage-info-box-inner">
                <div className="mypage-level">
                  <div className="mypage-level-now">
                    현재 스테이지 <strong>{this.props.userStage}</strong>
                  </div>
                  <div className="mypage-level-info">
                    전체{" "}
                    {this.props.levelAll
                      ? this.props.levelAll[this.props.userLevel - 1].problem
                      : "0"}{" "}
                    단계 중에 {this.props.userStage} 단계 진행 중입니다.
                  </div>
                  <div className="mypage-level-info-detail">
                    {this.props.levelAll &&
                      this.props.levelAll[
                        this.props.userLevel - 1
                      ].problemTitle.map((level, i) => {
                        return (
                          <div key={i}>
                            {i + 1} 단계 {`"`}
                            <strong>{level}</strong>
                            {`"`}
                          </div>
                        );
                      })}
                  </div>
                  <div className="mypage-level-info-end">
                    레벨 {this.props.userLevel}에선 위 문제를 만나게 됩니다.
                  </div>
                </div>
                <div className="mypage-level-graph">
                  {this.props.levelAll && (
                    <Progress
                      type="circle"
                      percent={
                        (this.props.userStage /
                          this.props.levelAll[this.props.userLevel - 1]
                            .problem) *
                        100
                      }
                      strokeColor={"#2b31ac"}
                      status="active"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mypage-code-box">
              <div className="mypage-code-scroll">
                <div className="mypage-code-header">내가 푼 문제들</div>
                <div className="mypage-code-box-wrapper">
                  {myCode &&
                    myCode.map((code, i) => {
                      return (
                        <div className="mypage-code" key={i}>
                          <div className="inner-header">{code.title}</div>
                          <div className="inner-level">
                            Level {code.level}-{code.stage}
                          </div>
                          <div className="inner-code">
                            내 코드
                          </div>
                          {code.code}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;
