const initialState = {
  problemAll: null,
  popularProblem: null,
  popularProblemNumber: 0,
  problemInfo: null,
  problemCheck: null,
  problemScore: null,
  finalCode: null,
  submitTime: null,
  storgeTime: null,
  btnText: null,
  todayEnd: false
};

function problemReducers(state = initialState, action) {
  switch (action.type) {
    case "PROBELM_ONLOAD_ALL":
      return Object.assign(
        { ...state },
        {
          problemAll: action.responseJson.problem,
          popularProblem: action.responseJson.popularProblem,
          popularProblemNumber: action.responseJson.popularProblemNumber
        }
      );
    case "PROBELM_ONLOAD":
      console.log("PROBELM_ONLOAD_ALL");
      return Object.assign(
        { ...state },
        {
          problemInfo: action.responseJson
        }
      );
    case "PROBELM_CHECK":
      return Object.assign(
        { ...state },
        {
          problemCheck: action.responseJson.result
        }
      );
    case "PROBELM_SCORE":
      return Object.assign(
        { ...state },
        {
          problemScore: action.responseJson.result,
          finalCode: action.responseJson.finalCode,
          submitTime: action.responseJson.time,
          btnText: action.responseJson.btnText,
          problemCheck: null
        }
      );
    case "SET_STORGETIME":
        console.log("SET_STORGETIME", action);
      return Object.assign(
        { ...state },
        {
          storgeTime: action.time,
          submitTime: null
        }
      );
    case "CLOSE_RESULTMODAL":
      return Object.assign(
        { ...state },
        {
          storgeTime: null,
          submitTime: null
        }
      );
    case "END_TODAYMODAL":
      return Object.assign(
        { ...state },
        {
          storgeTime: null,
          submitTime: null,
          todayEnd: true
        }
      );
    case "LOGIN_SUCCESS":
      return Object.assign(
        { ...state },
        {
          todayEnd: false
        }
      );

    default:
      return state;
  }
}

export default problemReducers;
