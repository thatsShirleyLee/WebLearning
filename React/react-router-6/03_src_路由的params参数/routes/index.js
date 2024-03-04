import About from "../page/About";
import Home from "../page/Home";
import {Navigate} from "react-router-dom";
import React from "react";
import News from "../page/News";
import Message from "../page/Message";
import Detail from "../page/Detail";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>,
                children: [
                    {
                        path: 'detail/:id/:title/:content',
                        element: <Detail/>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]