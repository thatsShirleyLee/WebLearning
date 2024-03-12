import { defineStore } from "pinia";

export const useCountState = defineStore('count', {
    // actions存放一个一个的方法，用于响应组件中的“动作”
    actions: {
        increment(value: number) {
            this.sum += value   // this指向useCountState
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 1,
            school: 'atguigu',
            location: '宏福科技园'
        }
    },
    getters: {
        bigSum: state => state.sum * 10,
        upperSchool() :string {
            return this.school.toUpperCase()
        }
    }
})