<template>
    <div class="talk">
        <button @click="getLoveTalk" style="font-size: larger;">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    import { reactive } from 'vue';
    let talkList = reactive([
        { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
        { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
        { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' }
    ])
    async function getLoveTalk() {
        let {data: {content}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {
            id: nanoid(),
            title: content
        }
        talkList.unshift(obj)
    }
</script>

<style scoped>
    .talk {
        background-color: pink;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>