/*
    1. 该文件是用于创建一个为 Count 组件服务的 reducer， reducer 的本质就是一个函数
    2. reducer 函数会接收到两个参数， 分别为： 之前之前状态 (preState), 动作对象 (action)
 */

const initState = 0 // 初始化状态
export default function createReducer(preState=initState, action) {
    //  从 action 对象中获取: type data
    const {type, data} = action
    // 根据 type 决定如何加工数据
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return  preState - data
        default:
            return preState
    }
}