import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*Provider会自动分析 App 组件下所有容器组件，然后传递 store 给所有容器组件*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);