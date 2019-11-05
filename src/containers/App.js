import { connect } from "react-redux";
import App from "../components/App/App";
import { loginAPI } from "../api";
import Auth from "../components/Auth";

const mapStateToProps = state => {
  const auth = new Auth();
  const {
    authenticated,
    userName,
    userPictureUrl,
    userLevel,
    userPoint
  } = state.login;
  const { sideModal, problemModal } = state.modal;

  return {
    auth,
    authenticated,
    userName,
    userPictureUrl,
    userLevel,
    userPoint,
    sideModal,
    problemModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad(userInfo) {
      loginAPI(dispatch, userInfo);
    },
    clickSideModal(state) {
      dispatch({
        type: "CLICK_SIDEMODAL",
        state
      });
    },
    clickSideProblemModal(state) {
      dispatch({
        type: "CLICK_SIDEPROBLEMMODAL",
        state
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
