import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import profile from "../../image/profile.png";
import btn from "../../image/btn.png";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div
          onClick={e => this.props.clickSideModal(this.props.sideModal)}
          className="hamburg-btn-wrapper"
        >
          <img className="hamburg-btn" src={btn} />
        </div>
        <div className="logo-wrapper">
          <Link className="header-logo" to="/">
            ALGOIII
          </Link>
        </div>
        <div className="logout">
          <div onClick={this.props.auth.signOut}>
            <Link to="/login">LOGOUT</Link>
          </div>
        </div>
        <div className="user-info-wrapper">
          <div className="user-name">
            <strong>{this.props.name}</strong> 님 안녕하세요!
          </div>
          <div className="user-picture-wrapper">
            <img
              className="user-picture"
              src={
                this.props.userPictureUrl ? this.props.userPictureUrl : profile
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
