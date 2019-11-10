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
    if (localStorage.getItem("id_token")) {
      let user_info = jwtDecode(localStorage.getItem("id_token"));
      this.props.onLoad(user_info);
    }
  }

  render() {
    var time = 0;
    console.log(Number(localStorage.getItem("submitTime")));
    if (Number(localStorage.getItem("submitTime")) > 0) {
      time = Number(localStorage.getItem("submitTime"));
    }
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
              userStage={this.props.userStage}
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
          path="/problems/:level/:stage"
          render={routrProps => (
            <Problem
              routrProps={routrProps}
              userStage={this.props.userStage}
              checkCode={this.props.checkCode}
              scoreCode={this.props.scoreCode}
              problemOnLoad={this.props.problemOnLoad}
              closeSideProblemModal={this.props.closeSideProblemModal}
              problemInfo={this.props.problemInfo}
              problemCheck={this.props.problemCheck}
              problemScore={this.props.problemScore}
              submitTime={this.props.submitTime}
              time={time}
              storgeTime={this.props.storgeTime}
              setStorgeTime={this.props.setStorgeTime}
            />
          )}
        >
          {this.props.problemResultModal && (
            <ProblemResult
              problemScore={this.props.problemScore}
              finalCode={this.props.finalCode}
              submitTime={this.props.submitTime}
              closeResultModad={this.props.closeResultModad}
            />
          )}
        </Route>
      </div>
    );
  }
}

export default App;
