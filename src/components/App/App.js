import React, { Component } from "react";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Callback from "../Callback";
import Home from "../Home/Home";
import SideHeader from "../Sideheader/SideHeader";
import Header from "../Header/Header";
import Problem from "../Problem/Problem";
import ProblemResult from "../ProblemResult/ProblemResult";
import TodayEnd from "../TodayEnd/TodayEnd";
import Mypage from "../Mypage/Mypage";
import "./App.scss";
import loading from "../../image/loading.gif";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    var user_info;
    if (localStorage.getItem("id_token")) {
      user_info = jwtDecode(localStorage.getItem("id_token"));
      this.props.onLoad(user_info);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.todayEnd) {
      if (localStorage.getItem("id_token")) {
        let user_info = jwtDecode(localStorage.getItem("id_token"));
        this.props.onLoad(user_info);
      }
    }
  }
  render() {
    return (
      <div className="app">
        {!this.props.todayAuthority && (
          <TodayEnd
            auth={this.props.auth}
            userName={this.props.userName}
            userLevel={this.props.userLevel}
            userStage={this.props.userStage}
            userPoint={this.props.userPoint}
            onLoad={this.props.onLoad}
          />
        )}
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
              userLevel={this.props.userLevel}
              userStage={this.props.userStage}
              clickSideProblemModal={this.props.clickSideProblemModal}
              sideModal={this.props.sideModal}
              problemModal={this.props.problemModal}
              levelAll={this.props.levelAll}
            />
          </>
        ) : (
          ""
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
            onLoadProblem={this.props.onLoadProblem}
            problemAll={this.props.problemAll}
            popularProblem={this.props.popularProblem}
            popularProblemNumber={this.props.popularProblemNumber}
            closeSideProblemModal={this.props.closeSideProblemModal}
            userAll={this.props.userAll}
          />
        </Route>
        <Route path="/callback">
          <Callback auth={this.props.auth} />
        </Route>
        <Route exact path="/mypage">
          <Mypage
            closeSideProblemModal={this.props.closeSideProblemModal}
            codeAll={this.props.codeAll}
            userLevel={this.props.userLevel}
            userName={this.props.userName}
            userPictureUrl={this.props.userPictureUrl}
            userPoint={this.props.userPoint}
            userStage={this.props.userStage}
            levelAll={this.props.levelAll}
          />
        </Route>
        <Route
          exact
          path="/problems/:level/:stage"
          render={routrProps => (
            <Problem
              routrProps={routrProps}
              userName={this.props.userName}
              userStage={this.props.userStage}
              checkCode={this.props.checkCode}
              scoreCode={this.props.scoreCode}
              problemOnLoad={this.props.problemOnLoad}
              closeSideProblemModal={this.props.closeSideProblemModal}
              problemInfo={this.props.problemInfo}
              problemCheck={this.props.problemCheck}
              problemScore={this.props.problemScore}
              submitTime={this.props.submitTime}
              storgeTime={this.props.storgeTime}
              setStorgeTime={this.props.setStorgeTime}
              endTodayModal={this.props.endTodayModal}
              enterProblemModal={this.props.enterProblemModal}
              onClickNoticeProblemModal={this.props.onClickNoticeProblemModal}
              problemChance={this.props.problemChance}
              onLoadNoticeInfo={this.props.onLoadNoticeInfo}
            />
          )}
        >
          {this.props.problemResultModal && (
            <ProblemResult
              problemScore={this.props.problemScore}
              finalCode={this.props.finalCode}
              submitTime={this.props.submitTime}
              closeResultModal={this.props.closeResultModal}
              returnResultModal={this.props.returnResultModal}
              btnText={this.props.btnText}
              name={this.props.userName}
            />
          )}
        </Route>
      </div>
    );
  }
}

export default App;
