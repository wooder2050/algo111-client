import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        {this.props.authenticated ? (
          <div className="main-wrapper">
            <label className="mr-2 text-white">{this.props.userName}</label>
            <br />
            <button className="btn btn-dark" onClick={this.props.auth.signOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className="home-wrapper">
            <div className="home">
              <div className="login-wrapper">
                <div className="title">ALGO111</div>
                <div className="description">
                  <div className="description-line">
                    <strong>Algorithm </strong>problem service
                  </div>
                  <div className="description-line">
                    Must know
                    <strong> One Question</strong>
                  </div>
                  <div className="description-line">
                    Given time <strong>One Hour</strong>
                  </div>
                  <div className="description-line">
                    Steady effort <strong> A Day</strong>
                  </div>
                  <div className="description-line">
                    with <strong>JavaScript</strong>
                  </div>
                  <div className="description-line">
                    for front-end web developer
                  </div>
                </div>
                <button className="login-btn" onClick={this.props.auth.signIn}>
                  Log In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
