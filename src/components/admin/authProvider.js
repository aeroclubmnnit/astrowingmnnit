import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

const authProvider = {

  login: ({ username, password }) => {
    return fetch(`${REACT_APP_SERVER}/api/adminlogin`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        else {
          localStorage.setItem("role", data.role);
        }
      });
  },
  checkAuth: () => {
    return localStorage.getItem("role") && localStorage.getItem("jwtToken")
      ? fetch(`${REACT_APP_SERVER}/api/isAdmin`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
        })
      : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("role");
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 422 || status === 401 || status === 403) {
      localStorage.removeItem("role");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
