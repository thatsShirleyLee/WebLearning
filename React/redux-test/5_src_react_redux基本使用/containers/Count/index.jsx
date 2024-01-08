import CountUI from "../../components/Count";
import {connect} from "react-redux";
// 引入 action
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";

//  mapStateToProps 函数返回的是一个对象
//  返回的对象的key就作为传递给 UI 组件 props 的 key, value 就作为传递给 UI 组件 props 的 value
//  mapStateToProps 用于传递状态
function mapStateToProps(state) { // state 是 react-redux 在调用 connect 时就会调用 store.getState() 的返回值
    return {count: state}
}

//  mapDispatchToProps 函数返回的是一个对象
//  返回的对象的key就作为传递给 UI 组件 props 的 key, value 就作为传递给 UI 组件 props 的 value
//  mapDispatchToProps 用于传递操作状态的函数
function mapDispatchToProps(dispatch) {
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}
// 创建并暴露一个CountContainer
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
/*
* connect
* 第一个参数映射状态
* 第二个参数映射操作状态的函数
* 第三个参数绑定UI组件
*/