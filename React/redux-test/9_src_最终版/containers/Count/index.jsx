import React, {Component} from 'react';
// 引入 connect 用于连接UI组件与redux
import {connect} from "react-redux";
// 引入 action
import {
    decrement,
    increment,
    incrementAsync
} from "../../redux/actions/count";

// 定义 UI 组件
class Count extends Component {

    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count %2 !== 0){
            this.props.increment(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1, 500)
    }

    render() {
        return (
            <div>
                <h1>我是 Count 组件, 下方组件总人数为 {this.props.personsLen}</h1>
                <h2>当前求和为: {this.props.count} </h2>
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
// 创建并暴露一个CountContainer
export default connect(
    state => ({
        count: state.count,
        personsLen: state.persons.length
    }),
    // mapDispatchToProps 的完整写法
    /*dispatch => (
        {
            jia: number => dispatch(increment(number)),
            jian: number => dispatch(decrement(number)),
            jiaAsync: (number, time) => dispatch(incrementAsync(number, time))
        }
    )*/
    // mapDispatchToProps 的简单写法
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)