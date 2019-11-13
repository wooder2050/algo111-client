import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LevelBtn from "../LevelBtn/LevelBtn";
import "./SideHeader.scss";
import problem from "../../image/problem.png";
import myPage from "../../image/mypage.png";
import problemMode from "../../image/problem-mode.png";

class SideHeader extends Component {
  render() {
    return (
      <>
        {this.props.sideModal ? (
          <div className="side-header-wrapper-detail-mode">
            <div
              onClick={e =>
                this.props.clickSideProblemModal(this.props.problemModal)
              }
              className="icon-wrapper-detail-mode"
            >
              <div className="icon-wrapper">
                <img src={problem} className="icon" />
              </div>
              <div className="side-icon-text">PROBLEM</div>
            </div>
            <div className="icon-wrapper-detail-mode">
              <NavLink className="icon-wrapper" to="/mypage">
                <img src={myPage} className="icon" />
              </NavLink>
              <div className="side-icon-text">MY-PAGE</div>
            </div>
          </div>
        ) : (
          <div className="side-header-wrapper">
            {this.props.problemModal ? (
              <div className="icon-wrapper-problem-mode">
                <div
                  onClick={e =>
                    this.props.clickSideProblemModal(this.props.problemModal)
                  }
                >
                  <img src={problemMode} className="icon" />
                </div>
                <div className="side-icon-text">PROBLEM</div>
              </div>
            ) : (
              <div className="icon-wrapper">
                <div
                  onClick={e =>
                    this.props.clickSideProblemModal(this.props.problemModal)
                  }
                >
                  <img src={problem} className="icon" />
                </div>
                <div className="side-icon-text">PROBLEM</div>
              </div>
            )}
            <div className="icon-wrapper">
              <NavLink to="/mypage">
                <img src={myPage} className="icon" />
              </NavLink>
              <div className="side-icon-text">MY-PAGE</div>
            </div>
          </div>
        )}

        {this.props.problemModal ? (
          <div className="side-problem-content-wrapper">
            <div className="side-problem-wrapper">
              <div className="side-problem-header">
                {this.props.name} 님을 위한 코스
              </div>
              {this.props.levelAll &&
                this.props.levelAll.map((level, i) => {
                  return (
                    <LevelBtn
                      key={i}
                      userLevel={this.props.userLevel}
                      userStage={this.props.userStage}
                      level={level}
                    />
                  );
                })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

export default SideHeader;
