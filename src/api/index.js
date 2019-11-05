export const loginAPI = (dispatch, userInfo) => {
  return new Promise(() => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        user_info: userInfo
      })
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
          type: "LOGIN_SUCCESS",
          responseJson
        });
      });
  });
};
