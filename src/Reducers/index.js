import { connectRouter } from "connected-react-router";
import { adminReducer, adminSaga } from "react-admin";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import authProvider from "../components/admin/authProvider";
import { dataProvider } from "../components/admin/dataProvider";

const userReducer = (user = null, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE_BLOG":
      return {
        ...user,
        blogs: [...user.blogs, action.payload],
      };
    case "REQUEST_COMPONENT":
      return {
        ...user,
        issues: [...user.issues, action.payload],
      };
    case "INVITE_USER":
      const new_proj_arr = user.projects.map((project) => {
        if (project._id === action.payload._id) return action.payload;
        return project;
      });
      return {
        ...user,
        projects: new_proj_arr,
      };
    case "INVITE_USER_PHOTO":
      const new_photo_arr = user.photos.map((photo) => {
        if (photo._id === action.payload._id) return action.payload;
        return photo;
      });
      return {
        ...user,
        photos: new_photo_arr,
      };
    case "ACCEPT_INVITE_PROJECT":
      return {
        ...user,
        projects: [...user.projects, action.payload],
      };
    case "ACCEPT_INVITE_PHOTO":
      return {
        ...user,
        projects: [...user.photos, action.payload],
      };

    case "CREATE_PROJECT":
      return {
        ...user,
        projects: [...user.projects, action.payload],
      };
    case "UPDATE_PROJECT":
      return {
        ...user,
        projects: user.projects.map((p) => {
          if (p._id === action.payload._id) return action.payload;
          else return p;
        }),
      };
    case "CREATE_PHOTO":
      return {
        ...user,
        photos: [...user.photos, action.payload],
      };
    case "UPDATE_PHOTO":
      return {
        ...user,
        photos: user.photos.map((p) => {
          if (p._id === action.payload._id) return action.payload;
          else return p;
        }),
      };
    case "CLEAR":
      return null;
    default:
      return user;
  }
};

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    admin: adminReducer,
  });

const saga = function* rootSaga() {
  yield all([adminSaga(dataProvider, authProvider)].map(fork));
};
const sagaMiddleware = createSagaMiddleware();

export default { rootReducer, sagaMiddleware, saga };
