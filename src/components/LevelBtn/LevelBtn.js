import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LevelBtn.scss";

class LevelBtn extends Component {
  render() {
    var per = 50;
    const tempStyle = {
      width: `${per * 0.9}%`
    };
    return (
      <NavLink className="side-problem-level" to="/level/1-1">
        <div className="side-problem-level-title">LEVEL 1 기초다지기</div>
        <div className="side-problem-level-info">
          배열과 반복문을 이용합니다.
        </div>
        <div className="side-problem-level-Progress"></div>
        <div
          className="side-problem-level-Progress-complete"
          style={tempStyle}
        ></div>
        <div className="side-problem-level-Progress-info">
          <div className="side-problem-level-Progress-info-end">
            문제 2/4개 풀이 완료
          </div>
          <div className="side-problem-level-Progress-info-percent">50%</div>
        </div>
      </NavLink>
    );
  }
}

export default LevelBtn;
