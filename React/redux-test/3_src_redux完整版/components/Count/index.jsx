import React, {Component} from 'react';
// 引入 store， 用于获取 redux 中的保存状态
import store from "../../redux/store";
import {createDecrementAction, createIncrementAction} from "../../redux/count_action";

class Count extends Component {

    componentDidMount() {
        // 检测 redux 中的状态， 只要变化就调用 render
        store.subscribe(() => {
            this.setState({}) // 更新状态为：什么也不更新，借用setState()来render()，刷新组件
        })
    }

    increment = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为: {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
                &nbsp;
            </div>
        );
    }
}

export default Count;