import { combineReducers } from 'redux/dist/redux'
// 引入为 Count 组件服务的 reducer
import count from './count'
// 引入为 Person 组件服务的 reducer
import persons from './person'

// 汇总所有的 reducer 变为一个总的 reducer
export default combineReducers({
    count,
    persons
})