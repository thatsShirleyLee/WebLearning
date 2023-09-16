import React, {Component} from 'react';
import PubSub from "pubsub-js";

/*
    xhr <= {axios, jQuery}
    fetch
 */
export default class Search extends Component {
    search = async () => {
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value: keyWord}} = this;
        // 消息发布
        PubSub.publish('atguigu', {isFirst: false, isLoading: true});
        /* 发送网络请求 -- 使用 fetch 发送 */
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了');
        //         return response.json();
        //     },
        //     error => {
        //         console.log('联系服务器失败了');
        //     }
        // ).then(
        //     response => {console.log('获取数据成功了', response);},
        //     error => {console.log('获取数据失败了', error);}
        // )
        /* 发送网络请求 -- 使用 fetch 发送 优化版本 */
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了');
        //         return response.json();
        //     },
        // ).then(
        //     response => {console.log('获取数据成功了', response);},
        // ).catch(
        //     error => {console.log('请求出错！');}
        // )
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json();
            console.log(data);
            PubSub.publish('atguigu', {isLoading: false, users: data.items});
        } catch (error) {
            console.log('请求出错！', error);
            PubSub.publish('atguigu', {isLoading: false, err: error.message});
        }
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