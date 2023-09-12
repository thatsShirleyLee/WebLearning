import React, {Component} from 'react';
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import './App.css'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
        ],
    }
    // addTodo 用于添加一个todo, 接受的参数是todo对象
    addTodo = (todoObj) => {
        // 获取原todo
        const {todos} = this.state;
        // 追加一个todo
        const newTodos = [todoObj, ...todos];
        // 更新状态
        this.setState({todos: newTodos});
    }

    // updateTodo 用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取原始状态
        const {todos} = this.state;
        // 匹配处理数据
        const newTodos = todos.map((todo) => {
            if(todo.id === id) return {...todo, done}; // 复制todo，仅修改done
            else return todo;
        })
        this.setState({todos: newTodos});
    }
    // deleteTodo 用于删除一个todo对象
    deleteTodo = id => {
        // 获取原始状态
        const {todos} = this.state;
        // 筛选删除
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        // 更新状态
        this.setState({todos: newTodos});
    }
    // checkAllTodo 用于全选
    checkAllTodo = (done) => {
        // 获取原始状态
        const {todos} = this.state;
        // 加工数据
        const newTodos = todos.map((todo) => {
            return {...todo,done}; // 修改done
        })
        // 更新状态
        this.setState({todos: newTodos});
    }
    // clearAllDone 用于清除完所有已完成的任务
    clearAllDone = () => {
        // 获取原始状态
        const {todos} = this.state;
        // 筛选删除
        const newTodos = todos.filter((todo) => {
            return !todo.done; // 留下未完成的
        })
        // 更新状态
        this.setState({todos: newTodos});
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}