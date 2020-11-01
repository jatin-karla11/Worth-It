import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';


ReactDOM.render(
  <React.StrictMode>
    <>
    <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <MainApp />
    </BrowserRouter>
    </StateProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();