import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import Login from "../Login/Login";
import "./Home.scss";

class Home extends Component {
  render() {
    if (!this.props.userName && localStorage.getItem("id_token")) {
      let user_info = jwtDecode(localStorage.getItem("id_token"));
      this.props.onLoad(user_info);
    }
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
          <Login auth={this.props.auth} />
        )}
      </div>
    );
  }
}

export default Home;
