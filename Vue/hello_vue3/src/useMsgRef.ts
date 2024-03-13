import { customRef } from 'vue';

// 使用 vue 提供的 customRef 定义响应式数据
// track(跟踪)、trigger(触发)
export default function (initVal: string, delay: number) {
    let timer:number
    let msg = customRef((track, trigger) => {
        return {
            // get 何时调用？—— msg 被读取时
            get() {
                track()	// 告诉vue msg很重要, 要对 msg 进行持续关注, 一旦变化就去更新
                return initVal
            },
            // set 何时调用？—— msg 被修改时
            set(val) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    initVal = val
                    trigger() //通知 vue 一下数据 msg 变化了
                }, delay)
            }
        }
    })
    return {msg}
} 