import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import Demo from "./components/Demo";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <Demo/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>
)