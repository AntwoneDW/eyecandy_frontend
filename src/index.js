import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppConnected from './App';
import { Provider } from "react-redux";

import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import rootReducer from "./reducers";

const initialState = { images: {loaded: false, data: []}};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <AppConnected />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
