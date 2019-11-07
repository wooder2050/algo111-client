import React, { Component } from "react";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Callback from "../Callback";
import Home from "../Home/Home";
import SideHeader from "../Sideheader/SideHeader";
import Header from "../Header/Header";
import Problem from "../Problem/Problem";
import ProblemResult from "../ProblemResult/ProblemResult";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    console.log("app ", localStorage.getItem("id_token"));
    if (localStorage.getItem("id_token")) {
      let user_info = jwtDecode(localStorage.getItem("id_token"));
      if (user_info.name !== this.props.userName) {
        this.props.onLoad(user_info);
      }
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="app">
        {this.props.userName ? (
          <>
            <Header
              name={this.props.userName}
              auth={this.props.auth}
              userPictureUrl={this.props.userPictureUrl}
              clickSideModal={this.props.clickSideModal}
              sideModal={this.props.sideModal}
            />
            <SideHeader
              name={this.props.userName}
              clickSideProblemModal={this.props.clickSideProblemModal}
              sideModal={this.props.sideModal}
              problemModal={this.props.problemModal}
            />
          </>
        ) : (
          <div></div>
        )}
        <Route exact path="/" exact>
          <Home
            auth={this.props.auth}
            onLoad={this.props.onLoad}
            authenticated={this.props.authenticated}
            userName={this.props.userName}
            userPictureUrl={this.props.userPictureUrl}
            clickSideModal={this.props.clickSideModal}
            clickSideProblemModal={this.props.clickSideProblemModal}
            sideModal={this.props.sideModal}
            problemModal={this.props.problemModal}
          />
        </Route>
        <Route exact path="/callback" exact>
          <Callback auth={this.props.auth} />
        </Route>
        <Route
          exact
          path="/level/:level"
          render={routrProps => (
            <Problem
              routrProps={routrProps}
              checkCode={this.props.checkCode}
              scoreCode={this.props.scoreCode}
              problemOnLoad={this.props.problemOnLoad}
              closeSideProblemModal={this.props.closeSideProblemModal}
              problemInfo={this.props.problemInfo}
              problemCheck={this.props.problemCheck}
              problemScore={this.props.problemScore}
            />
          )}
        >
          {this.props.problemResultModal && (
            <ProblemResult problemScore={this.props.problemScore} />
          )}
        </Route>
      </div>
    );
  }
}

export default App;
