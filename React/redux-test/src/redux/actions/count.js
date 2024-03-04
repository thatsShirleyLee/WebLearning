/*
    该文件专门为 Count 组件生成 action 对象
 */

import {INCREMENT, DECREMENT} from "../constant";

export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})

// 异步 action， 就是指 action 的值为函数， 异步 action 中一般都会调用 同步 action
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout( ()=> {
            dispatch(increment(data))
        }, time)
    }
}