import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TodayEnd.scss";

class TodayEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: 0,
      tomorrowTime: 0
    };
  }
  timerId = 0;
  componentDidMount() {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    var tomorrow = new Date(todayYear, todayMonth, todayDate + 1);
    this.setState({ tomorrowTime: tomorrow });

    this.timerId = setInterval(e => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    const today = new Date();
    this.setState({ curTime: today });
  }

  render() {
    var remainingTime = Math.floor(
      (this.state.tomorrowTime - this.state.curTime) / 1000
    );
    var seconds = remainingTime % 60;
    var hour = Math.floor(remainingTime / 3600) % 24;
    var min = Math.floor(remainingTime / 60) % 60;
    return (
      <div className="today-end-wrapper">
        <div className="today-end">
          <div className="today-end-main-text">
            오늘 주어진 한 시간을 모두 소진하셨습니다.
          </div>
          <div className="today-end-text">다음 기회까지 남은 시간</div>
          <div className="time-table">
            {hour > 9 ? hour : "0" + hour} : {min > 9 ? min : "0" + min} :{" "}
            {seconds > 9 ? seconds : "0" + seconds}
          </div>
          <div className="today-end-user-info-top">
            <strong>{this.props.userName ? this.props.userName : ""}</strong> 님
          </div>
          <div className="today-end-user-info">
            <strong>
              {this.props.userLevel ? this.props.userLevel + "레벨" : ""}{" "}
              {this.props.userStage ? this.props.userStage + "단계" : ""}
            </strong>{" "}
            진행 중입니다.
          </div>
          <div className="today-end-user-info">
            획득 포인트 :{" "}
            <strong>{this.props.userPoint ? this.props.userPoint : 0}</strong>{" "}
            점
          </div>
          <div onClick={this.props.auth.signOut} className="today-end-btn">
            <NavLink className="today-end-btn-text" to="/login">LOGOUT</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default TodayEnd;
