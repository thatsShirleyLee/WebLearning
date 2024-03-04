// 创建"外壳"组件App
import React, {Component} from 'react';
import Hello from "./components/Hello"; // 如果jsx组件文件默认名index，目录可少写一层
import Welcome from "./components/Welcome/Welcome";

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}