import React, {Component} from 'react';
// 引入 connect 用于连接UI组件与redux
import {connect} from "react-redux";
// 引入 action
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";

// 定义 UI 组件
class Count extends Component {

    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count %2 !== 0){
            this.props.jia(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为: {this.props.count} </h1>
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
    state => ({count: state}),
    // mapDispatchToProps 的完整写法
    /*dispatch => (
        {
            jia: number => dispatch(createIncrementAction(number)),
            jian: number => dispatch(createDecrementAction(number)),
            jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
        }
    )*/
    // mapDispatchToProps 的简单写法
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)