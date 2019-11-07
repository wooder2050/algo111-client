const initialState = {
  problemInfo: null
};

function problemReducers(state = initialState, action) {
  switch (action.type) {
    case "PROBELM_ONLOAD":
      return Object.assign(
        { ...state },
        {
          problemInfo : action.responseJson
        }
      );
    default:
      return state;
  }
}

export default problemReducers;
