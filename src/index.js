import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";
const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
