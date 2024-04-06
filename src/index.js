import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/components/store/index.js";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
