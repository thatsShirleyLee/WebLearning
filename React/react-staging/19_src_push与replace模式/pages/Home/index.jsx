import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink replace to={"/home/news"}>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink replace to={"/home/message"}>Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 注册路由 */}
                    <Switch>
                        <Route path={"/home/news"} component={News}/>
                        <Route path={"/home/message"} component={Message}/>
                        <Redirect to={"/home/news"}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;