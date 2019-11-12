import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import Login from "../Login/Login";
import "./Home.scss";

class Home extends Component {
  componentDidMount() {
    this.props.onLoadProblem();
  }
  render() {
    if (!this.props.userName && localStorage.getItem("id_token")) {
      let user_info = jwtDecode(localStorage.getItem("id_token"));
      this.props.onLoad(user_info);
    }
    return (
      <div onClick={this.props.closeSideProblemModal} className="home-main">
        {this.props.authenticated ? (
          <div className="main-wrapper">
            <div className="main-header">
              One problem one hour per day algorithm for frontend developers!
            </div>
            <div className="main-context-wrapper-left">
              <div className="popularProblem-wrapper">
                <div className="popularProblem-title">
                  현재 가장 많이 풀고 있는 문제
                </div>
                <div className="popularProblem-problem-title">
                  {this.props.popularProblem
                    ? this.props.popularProblem[0].title
                    : ""}
                </div>
                <div className="popularProblem-problem-level">
                  {this.props.popularProblem
                    ? "Level " +
                      this.props.popularProblem[0].level +
                      " - " +
                      this.props.popularProblem[0].stage
                    : ""}
                </div>
                <div className="popularProblem-problem-number">
                  {this.props.popularProblemNumber}명 도전 중!
                </div>
                <div className="popularProblem-problem-number">
                  {this.props.popularProblem
                    ? this.props.popularProblem[0].successPeople.length
                    : ""}
                  명 완료
                </div>
                <div className="popularProblem-problem-kinds">
                  {this.props.popularProblem
                    ? this.props.popularProblem[0].kinds
                    : ""}
                </div>
                <div className="popularProblem-problem-description">
                  {this.props.popularProblem
                    ? this.props.popularProblem[0].description
                    : ""}
                </div>
              </div>
              <div className="problem-all-box-wrapper">
                <div className="problem-all-wrapper">
                  {this.props.problemAll &&
                    this.props.problemAll.map((problem, i) => {
                      return (
                        <div className="problem-all-context-wrapper" key={i}>
                          <div className="line"></div>
                          <div className="problem-all-level" data-set={i}>
                            <strong>
                              Level {problem.level}-{problem.stage}
                            </strong>
                          </div>
                          <div className="problem-all-title" data-set={i}>
                            {problem.title}
                          </div>
                          <div className="problem-all-success" data-set={i}>
                            <strong>{problem.successPeople.length}</strong>명
                            완료
                          </div>
                          <div className="problem-all-kinds" data-set={i}>
                            <strong>{problem.kinds}</strong>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="main-context-wrapper-right"></div>
          </div>
        ) : (
          <Login auth={this.props.auth} />
        )}
      </div>
    );
  }
}

export default Home;
