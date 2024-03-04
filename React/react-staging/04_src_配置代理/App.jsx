import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
    getStudentData = () => {
        // 向3000端口发请求，3000没有于是转发给api1，api1配置了代理5000端口，所以可以找到资源
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('成功了',response.data)},
            error => {console.log('失败了',error)})
    }
    getCarData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('成功了',response.data)},
            error => {console.log('失败了',error)})
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        );
    }
}
