import React, {Component} from 'react';
import axios from 'axios';

export default class Search extends Component {
    search = () => {
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value: keyWord}} = this; // {xx}=XX 这是解构赋值; {xx: newName}=XX 这是解构赋值加重命名
        // 发送网络请求
        // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {console.log('成功了', response.data)},
        //     error => {console.log('失败了', error)}
        // )
        // 发送请求前通知App更新状态
        
        this.props.updateAppState({isFirst: false, isLoading: true});
        axios.get(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then( // 模拟数据，从3000->5000需要配置代理
            response => {
                console.log('成功了', response.data);
                this.props.updateAppState({isLoading: false, users: response.data.items});
            },
            error => {
                console.log('失败了', error);
                this.props.updateAppState({isLoading: false, err: error.message});
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}