import React from 'react';
import {useResolvedPath} from "react-router-dom";

function News(props) {
    // 作用：给定一个 URL值，解析其中的：path、search、hash值
    console.log(useResolvedPath('/user?id=001&name=tom#qwe'))
    return (
        <div>
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        </div>
    );
}

export default News;