import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to='news'>News</NavLink>
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