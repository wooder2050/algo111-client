const initialState = {
  sideModal: false,
  problemModal: false,
  problemResultModal: false
};

function modalReducers(state = initialState, action) {
  switch (action.type) {
    case "CLICK_SIDEMODAL":
      return Object.assign(
        { ...state },
        {
          sideModal: !action.state,
          problemModal: false
        }
      );
    case "CLICK_SIDEPROBLEMMODAL":
      return Object.assign(
        { ...state },
        {
          sideModal: false,
          problemModal: !action.state
        }
      );
    case "CLOSE_SIDEPROBLEMMODAL":
      return Object.assign(
        { ...state },
        {
          sideModal: false,
          problemModal: false
        }
      );
    case "PROBELM_SCORE":
      return Object.assign(
        { ...state },
        {
          problemResultModal: true
        }
      );
    case "CLOSE_RESULTMODAL":
      return Object.assign(
        { ...state },
        {
          problemResultModal: false
        }
      );
    case "RETURN_RESULTMODAL":
      return Object.assign(
        { ...state },
        {
          problemResultModal: false
        }
      );
    default:
      return state;
  }
}

export default modalReducers;
