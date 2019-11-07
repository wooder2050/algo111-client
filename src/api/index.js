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

export const checkCodeAPI = (dispatch, code, level) => {
  return new Promise(() => {
    fetch("http://localhost:5000/problems/check", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        code: code,
        level: level
      })
    })
      .then(response => {
        if (response.status === 200 || response.status === 401)
          return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
          type: "PROBELM_CHECK",
          responseJson
        });
      });
  });
};

export const scoreCodeAPI = (dispatch, code, level) => {
  return new Promise(() => {
    fetch("http://localhost:5000/problems/score", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        code: code,
        level: level
      })
    })
      .then(response => {
        if (response.status === 200 || response.status === 401)
          return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
          type: "PROBELM_SCORE",
          responseJson
        });
      });
  });
};

export const problemOnLoadAPI = (dispatch, level) => {
  return new Promise(() => {
    fetch(`http://localhost:5000/problems/${level}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
          type: "PROBELM_ONLOAD",
          responseJson
        });
      });
  });
};
