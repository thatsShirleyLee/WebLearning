import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*此处需要用 Provider 包裹 App, 目的是让 App 所有的后代容器厂组件都能接收到 store*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);