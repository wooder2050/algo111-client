const initialState = {
  problemInfo: null,
  problemCheck: null,
  problemScore: null,
  finalCode: null,
  submitTime: null,
  storgeTime: null,
  btnText: null
};

function problemReducers(state = initialState, action) {
  switch (action.type) {
    case "PROBELM_ONLOAD":
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
          btnText: action.responseJson.btnText
        }
      );
    case "SET_STORGETIME":
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

    default:
      return state;
  }
}

export default problemReducers;
