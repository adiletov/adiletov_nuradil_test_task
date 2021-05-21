import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.sass';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store, {history} from "./store/configStore";
import {Router, BrowserRouter} from "react-router-dom";


const app = (
    <Provider store={store}>
        <Router history={history}>
            <BrowserRouter >
                <App/>
            </BrowserRouter>
        </Router>
    </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
