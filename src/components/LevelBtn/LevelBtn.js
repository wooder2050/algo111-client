import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LevelBtn.scss";

class LevelBtn extends Component {
  render() {
    var per =
      (Number(this.props.userStage - 1) / this.props.level.problem) * 100;
    const tempStyle = {
      width: `${per}%`
    };
    const tempStyleComplete = {
      width: `100%`
    };
    const tempStyleUnComplete = {
      width: `0%`
    };
    return (
      <>
        {Number(this.props.userLevel) === this.props.level.level ? (
          <NavLink
            className="side-problem-level"
            to={`/problems/${this.props.userLevel}/${this.props.userStage}`}
          >
            <div className="side-problem-level-title">
              LEVEL {this.props.level.level} {this.props.level.title}
            </div>
            <div className="side-problem-level-info">
              {this.props.level.description}
            </div>
            <div className="side-problem-level-info">
              현재 문제 :{" "}
              <strong>
                {this.props.level.problemTitle[this.props.userStage - 1]}
              </strong>
            </div>
            <div className="side-problem-level-Progress">
              <div
                className="side-problem-level-Progress-complete"
                style={tempStyle}
              ></div>
            </div>
            <div className="side-problem-level-Progress-info">
              <div className="side-problem-level-Progress-info-end">
                문제 {this.props.userStage - 1}/{this.props.level.problem}개
                풀이 완료
              </div>
              <div className="side-problem-level-Progress-info-percent">
                {(Number(this.props.userStage - 1) / this.props.level.problem) *
                  100}
                %
              </div>
            </div>
          </NavLink>
        ) : (
          <div className="side-problem-level-unactive">
            <div className="side-problem-level-title-unactive">
              LEVEL {this.props.level.level} {this.props.level.title}
            </div>
            <div className="side-problem-level-info">
              {this.props.level.description}
            </div>
            <div className="side-problem-level-Progress">
              <div
                className="side-problem-level-Progress-complete"
                style={
                  Number(this.props.userLevel) > this.props.level.level
                    ? tempStyleComplete
                    : tempStyleUnComplete
                }
              ></div>
            </div>
            <div className="side-problem-level-Progress-info">
              <div className="side-problem-level-Progress-info-end">
                문제 {this.props.level.problem}개{" "}
                {Number(this.props.userLevel) > this.props.level.level
                  ? "완료"
                  : "준비중"}
              </div>
              <div className="side-problem-level-Progress-info-percent">
                {Number(this.props.userLevel) > this.props.level.level
                  ? "100%"
                  : "0%"}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default LevelBtn;
