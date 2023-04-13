import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const base_url = "https://ephemeral.docparser.com"
const base_url = ""

root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      href={base_url + "/assets/css/fontawesome5/fontawesome-pro-solid.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/fontawesome5/fontawesome-pro-light.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/fontawesome5/fontawesome-pro-regular.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/fontawesome5/fontawesome-pro-core.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/js/DataTables/datatables.min.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/dropzone.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/cropper.css"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/jquery-ui/jquery-ui-1.10.4.custom.min.css?v=123"}
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"
      integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/docparser.new.css?v=123"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/css/docparser.mobile.new.css?v=123"}
      rel="stylesheet"
    />
    <link
      href={base_url + "/assets/js/iCheck/skins/square/brightblue.css"}
      rel="stylesheet"
    />
    <link
      href="//fonts.googleapis.com/css?family=Bilbo"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="//fonts.googleapis.com/css?family=Lato:400,400italic,700,700italic,300,300italic,100italic,100,900,900italic"
      rel="stylesheet"
      type="text/css"
    />

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
