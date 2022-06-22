import React from "react";
import ReactDOM from "react-dom";
import App from './components/app'
import styles from "./scss/style.scss";

ReactDOM.render(
    <App />, 
    document.getElementById('root'));


module.hot.accept();