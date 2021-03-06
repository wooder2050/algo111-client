const initialState = {
  authenticated: false,
  userName: null,
  userPictureUrl: null,
  userLevel: 0,
  userStage: 0,
  userPoint: 0,
  todayAuthority: true,
  userAll: null,
  levelAll: null,
  codeAll : null,
  problemChance: null
};

function loginReducers(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return Object.assign(
        { ...state },
        {
          authenticated: true,
          userName: action.responseJson.userInfo.name,
          userPictureUrl: action.responseJson.userInfo.picture,
          userLevel: action.responseJson.userInfo.level,
          userStage: action.responseJson.userInfo.stage,
          userPoint: action.responseJson.userInfo.point,
          todayAuthority: action.responseJson.userInfo.todayAuthority,
          userAll: action.responseJson.userAll,
          levelAll: action.responseJson.levelAll,
          codeAll: action.responseJson.codeAll,
          problemChance : action.responseJson.userInfo.problemChance
        }
      );
      case "ONLOAD_NOTICEINFO":
        return Object.assign(
          { ...state },
          {
            problemChance: action.responseJson.userInfo.problemChance,
            todayAuthority: action.responseJson.userInfo.todayAuthority
          }
        );
    default:
      return state;
  }
}

export default loginReducers;
