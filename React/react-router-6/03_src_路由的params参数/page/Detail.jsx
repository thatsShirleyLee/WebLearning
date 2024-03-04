import React from 'react';
import {useMatch, useParams} from "react-router-dom";

function Detail(props) {
    const {id, title, content} = useParams()
    // const a = useMatch('/home/message/detail/:id/:title/:content')
    // console.log(a)
    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    );
}

export default Detail;