import React from 'react';
import {NavLink, Outlet, useOutlet} from "react-router-dom";

function Home(props) {
    /*
     * 作用：用来呈现当前组件中渲染的嵌套路由
     * 如果嵌套路由没有挂载,则result为null
     * 如果嵌套路由已经挂载,则展示嵌套的路由对象
     */
    console.log(useOutlet())
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" replace to='news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to='message'>Message</NavLink>
                    </li>
                </ul>
                {/*指定路由组件的呈现位置*/}
                <Outlet/>
            </div>
        </div>
    );
}

export default Home;