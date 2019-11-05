const initialState = {
  sideModal: false,
  problemModal: false
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
    default:
      return state;
  }
}

export default modalReducers;
