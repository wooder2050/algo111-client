const initialState = {
  problemInfo: null,
  problemCheck: null,
  problemScore: null
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
          problemScore: action.responseJson.result
        }
      );
    default:
      return state;
  }
}

export default problemReducers;
