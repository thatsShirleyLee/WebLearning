import React from 'react';
import qs from 'qs';
import {useSearchParams, useLocation} from "react-router-dom";

function Detail(props) {
    const [search, setSearch] = useSearchParams()
    const location = useLocation()
    const {id, title, content} = qs.parse(location.search.slice(1))
    console.log(id, title, content)
    return (
        /*<ul>
            <li>
                <button onClick={() => {setSearch('id=008&title=哈哈&content=嘻嘻')}}>点我更新收到的search参数</button>
            </li>
            <li>{search.get('id')}</li>
            <li>{search.get('title')}</li>
            <li>{search.get('content')}</li>
        </ul>*/
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    );
}

export default Detail;