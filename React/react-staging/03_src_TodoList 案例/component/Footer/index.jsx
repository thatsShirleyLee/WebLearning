import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";
export default class Footer extends Component {
    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }
    // 全选checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }
    // 清除已完成任务的回调
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, todoObj) => {return pre + (todoObj.done ? 1:0)},0);
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.handleCheckAll}/>
                </label>
                <span><span>已完成{doneCount}</span> / 全部{total}</span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}