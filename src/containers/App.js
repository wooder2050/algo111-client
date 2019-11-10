import { connect } from "react-redux";
import App from "../components/App/App";
import { loginAPI, checkCodeAPI, problemOnLoadAPI, scoreCodeAPI } from "../api";
import Auth from "../components/Auth";

const mapStateToProps = state => {
  const auth = new Auth();
  const {
    authenticated,
    userName,
    userPictureUrl,
    userLevel,
    userStage,
    userPoint
  } = state.login;
  const { sideModal, problemModal, problemResultModal } = state.modal;
  const {
    problemInfo,
    problemCheck,
    problemScore,
    finalCode,
    submitTime,
    storgeTime
  } = state.problem;

  return {
    auth,
    authenticated,
    userName,
    userPictureUrl,
    userLevel,
    userStage,
    userPoint,
    sideModal,
    problemModal,
    problemResultModal,
    problemInfo,
    problemCheck,
    problemScore,
    finalCode,
    submitTime,
    storgeTime
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
    },
    closeSideProblemModal() {
      dispatch({
        type: "CLOSE_SIDEPROBLEMMODAL"
      });
    },
    checkCode(code, level) {
      checkCodeAPI(dispatch, code, level);
    },
    scoreCode(code, level, time) {
      scoreCodeAPI(dispatch, code, level, time);
    },
    problemOnLoad(level, stage) {
      problemOnLoadAPI(dispatch, level, stage);
    },
    closeResultModad() {
      dispatch({
        type: "CLOSE_RESULTMMODAL"
      });
    },
    setStorgeTime(time) {
      dispatch({
        type: "SET_STORGETIME",
        time
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
