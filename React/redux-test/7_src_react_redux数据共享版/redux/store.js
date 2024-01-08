/*
    该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

// 引入 createStore， 专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware, combineReducers } from 'redux/dist/redux'
// 引入为 Count 组件服务的 reducer
import countReducer from './reducers/count'
// 引入为 Person 组件服务的 reducer
import personReducer from './reducers/person'
// 引入 thunk, 用于支持 异步 action
import thunk from "redux-thunk";

const allReducers = combineReducers(
    {
        he: countReducer,
        rens: personReducer
    }
)
// 暴露 store
export default createStore(allReducers, applyMiddleware(thunk))

/* applyMiddleware(thunk): 调用中间件，允许store接收函数类型 */