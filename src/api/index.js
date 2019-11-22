import { SERVER_URL } from '../constants';

export const loginAPI = (dispatch, userInfo) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/users`, {
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

export const checkCodeAPI = (dispatch, code, level, stage) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/problems/check`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        code: code,
        level: level,
        stage: stage
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

export const scoreCodeAPI = (dispatch, code, level, stage, time, userName) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/problems/score`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        code: code,
        level: level,
        time: time,
        stage: stage,
        userName: userName
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

export const problemOnLoadAPI = (dispatch, level, stage) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/problems/${level}/${stage}`, {
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

export const endTodayModalAPI = (dispatch, name) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/users/date`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        name: name
      })
    }).then(response => {
      if (response.status === 200) {
        dispatch({
          type: "END_TODAYMODAL"
        });
      }
    });
  });
};

export const onLoadProblemAPI = dispatch => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/problems`, {
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
          type: "PROBELM_ONLOAD_ALL",
          responseJson
        });
      });
  });
};


export const onLoadNoticeInfo = (dispatch,name, chance) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/users/chance`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        chance: chance,
        name : name
      })
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
        type: "ONLOAD_NOTICEINFO",
        responseJson
      })
      });
  });
};

export const reloadhomeAPI = (dispatch, name) => {
  return new Promise(() => {
    fetch(`${SERVER_URL}/users/reload`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        name : name
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
