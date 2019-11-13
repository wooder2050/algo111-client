import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Callback.scss";
import loading from "../image/loading.gif";

class Callback extends Component {
  async componentDidMount() {
    await this.props.auth.handleAuthentication();
    this.props.history.replace("/");
  }

  render() {
    return (
      <>
        <img className="loading-img" src={loading} />
        <div className="loading-text">I am Loading... be patient...</div>
      </>
    );
  }
}

export default withRouter(Callback);
