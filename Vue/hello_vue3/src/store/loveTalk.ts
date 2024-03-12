import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from "axios";
import { reactive } from "vue";

// 选项式写法
/* export const useTalkState = defineStore('talk', {
    actions: {
        async getOneTalk() {
            let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = {
                id: nanoid(),
                title: content
            }
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('taklList') as string) || []
        }
    }
}) */

// 组合式写法
export const useTalkState = defineStore('talk', () => {
    // talkList就是state
    const talkList = reactive(JSON.parse(localStorage.getItem('taklList') as string) || [])
    // actions
    async function getOneTalk() {
        let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {
            id: nanoid(),
            title: content
        }
        talkList.unshift(obj)
    }
    return { talkList, getOneTalk }
})