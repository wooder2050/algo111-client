import { connect } from "react-redux";
import App from "../components/App/App";
import {
  loginAPI,
  checkCodeAPI,
  problemOnLoadAPI,
  scoreCodeAPI,
  endTodayModalAPI,
  onLoadProblemAPI,
  onLoadNoticeInfo
} from "../api";
import Auth from "../components/Auth";

const mapStateToProps = state => {
  const auth = new Auth();
  const {
    authenticated,
    userName,
    userPictureUrl,
    userLevel,
    userStage,
    userPoint,
    todayAuthority,
    userAll,
    levelAll,
    codeAll,
    problemChance
  } = state.login;
  const {
    sideModal,
    problemModal,
    problemResultModal,
    enterProblemModal
  } = state.modal;
  const {
    problemAll,
    popularProblem,
    popularProblemNumber,
    problemInfo,
    problemCheck,
    problemScore,
    finalCode,
    submitTime,
    storgeTime,
    btnText,
    todayEnd
  } = state.problem;

  return {
    auth,
    authenticated,
    userName,
    userPictureUrl,
    userLevel,
    userStage,
    userPoint,
    todayAuthority,
    userAll,
    levelAll,
    codeAll,
    sideModal,
    problemModal,
    problemResultModal,
    enterProblemModal,
    problemChance,
    problemAll,
    popularProblem,
    popularProblemNumber,
    problemInfo,
    problemCheck,
    problemScore,
    finalCode,
    submitTime,
    storgeTime,
    btnText,
    todayEnd
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
    checkCode(code, level, stage) {
      checkCodeAPI(dispatch, code, level, stage);
    },
    scoreCode(code, level, stage, time, userName) {
      scoreCodeAPI(dispatch, code, level, stage, time, userName);
    },
    problemOnLoad(level, stage) {
      problemOnLoadAPI(dispatch, level, stage);
    },
    closeResultModal() {
      dispatch({
        type: "CLOSE_RESULTMODAL"
      });
    },
    returnResultModal() {
      dispatch({
        type: "RETURN_RESULTMODAL"
      });
    },
    setStorgeTime(time) {
      dispatch({
        type: "SET_STORGETIME",
        time
      });
    },
    endTodayModal(name) {
      endTodayModalAPI(dispatch, name);
    },
    onLoadProblem() {
      onLoadProblemAPI(dispatch);
    },
    onClickNoticeProblemModal() {
      dispatch({
        type: "CLOSE_NOTICEMODAL"
      });
    },
    onLoadNoticeInfo(name, chance) {
      onLoadNoticeInfo(dispatch, name, chance);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
