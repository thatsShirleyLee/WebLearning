import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

function Message(props) {
    const [messages] = useState([
        {id: '001', title: '消息1', content: '锄禾日当午'},
        {id: '002', title: '消息2', content: '汗滴禾下土'},
        {id: '003', title: '消息3', content: '谁知盘中餐'},
        {id: '004', title: '消息4', content: '粒粒皆辛苦'},
    ])
    return (
        <div>
            <ul>
                {messages.map(m => {
                    return (
                        <li key={m.id}>
                            {/*路由链接*/}

                            {/*传递params参数*/}
                            {/*<Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>*/}
                            {/*传递search参数*/}
                            {/*<Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>*/}
                            {/*传递state参数*/}
                            <Link to='detail' state={{id: m.id, title: m.title, content: m.content}}>{m.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <hr/>
            {/*指定子级路由呈现位置*/}
            <Outlet/>
        </div>
    );
}

export default Message;