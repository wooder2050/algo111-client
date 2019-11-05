import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./SideHeader.scss";
import problem from "../../image/problem.png";
import myPage from "../../image/mypage.png";
import problemMode from "../../image/problem-mode.png";

class SideHeader extends Component {
  render() {
    console.log(this.props.sideModal);
    console.log(this.props.problemModal);
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
              <NavLink className="icon-wrapper" to="/">
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
              <NavLink to="/">
                <img src={myPage} className="icon" />
              </NavLink>
              <div className="side-icon-text">MY-PAGE</div>
            </div>
          </div>
        )}

        {this.props.problemModal ? (
          <div className="side-problem-wrapper">
            <NavLink className="side-problem-level" to="/level/1">
              LEVEL 1
            </NavLink>
            <NavLink className="side-problem-level" to="/">
              LEVEL 1
            </NavLink>
            <NavLink className="side-problem-level" to="/">
              LEVEL 1
            </NavLink>
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

export default SideHeader;
