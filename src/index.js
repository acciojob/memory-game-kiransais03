import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import DataContextProvider from "./context/DataContextProvider"


ReactDOM.render(
    <Provider store={store}>
        <DataContextProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </DataContextProvider>
    </Provider>
, 
document.getElementById("root"));
