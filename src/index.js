import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import clayful from "clayful/client-js";
import axios from "axios";

clayful.config({
  client:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMxNzdlYmU0MzEyNDQzZTZkMjFhZTc0Nzg5ODE3ZTU2NDRlMjAzOGRhNTc5ZGI2OGNjYTAzM2Y4MGU5MjIxMGIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ5NTE0NzY1LCJzdG9yZSI6IlkyQlVKVzRUQlA3VC5EUlY2OUxBMjVDVkQiLCJzdWIiOiI2NlVSNU5QSDU4NEUifQ.oih6dG_sJMoTRHRdNOwbsTDtLE78wjNBcFFatXDOPvI",
});
clayful.install("request", require("clayful/plugins/request-axios")(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
