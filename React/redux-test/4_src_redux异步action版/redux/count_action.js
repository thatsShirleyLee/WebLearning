/*
    该文件专门为 Count 组件生成 action 对象
 */

import {INCREMENT, DECREMENT} from "./constant";
import store from "./store";

export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步 action， 就是指 action 的值为函数， 异步 action 中一般都会调用 同步 action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout( ()=> {
            dispatch(createIncrementAction(data))
        }, time)
    }
}