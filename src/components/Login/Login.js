import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
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
    );
  }
}

export default Login;
