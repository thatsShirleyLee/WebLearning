/*
    该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

// 引入 createStore， 专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware } from 'redux/dist/redux'
// 引入 thunk, 用于支持 异步 action
import thunk from "redux-thunk";
// 引入 redux-devtools-extension
import {composeWithDevTools} from "redux-devtools-extension";
import allReducers from './reducers/index'
// 暴露 store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
/* applyMiddleware(thunk): 调用中间件，允许store接收函数类型 */