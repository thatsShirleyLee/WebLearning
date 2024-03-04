import {ADD_PERSON} from "../constant";

// 初始化人的列表
const initState = [{id: '001', name: 'tom', age: 18}]
export default function createReducer(preState = initState, action) {
    const {type, data} = action
    switch (type){
        case ADD_PERSON:
            // preState.unshift(data) // 此处不可以这样写，因为preState的地址不变化, react浅比较后Diff算法使得页面不会更新数据重新渲染
            return [data, ...preState];
        default:
            return preState;
    }
}