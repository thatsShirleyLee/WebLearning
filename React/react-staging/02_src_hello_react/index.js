// 引入 React 核心库
import React from 'react';
// 引入 ReactDOM
import ReactDOM from 'react-dom';
// 引入 App 组件
import App from './App';

// 渲染 App 到页面
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)