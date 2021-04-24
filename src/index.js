import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import App from "./App.js";
import ConfigureStore, { history } from "./ConfigureStore";
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore().store
const persistor = ConfigureStore().persistor

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history} >
          <BrowserRouter basename='/' >
            <App />
          </BrowserRouter>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode >,
  document.getElementById("root")
);
