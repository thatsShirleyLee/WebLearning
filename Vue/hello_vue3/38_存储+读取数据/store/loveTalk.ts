import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from "axios";

export const useTalkState = defineStore('talk', {
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
            talkList: [
                { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
                { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
                { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' }
            ]
        }
    }
})