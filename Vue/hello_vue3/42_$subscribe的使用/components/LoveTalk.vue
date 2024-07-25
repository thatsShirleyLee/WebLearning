<template>
    <div class="talk">
        <button @click="getLoveTalk" style="font-size: larger;">获取一句土味情话</button>
        <!-- <button @click="talkState.getOneTalk" style="font-size: larger;">获取一句土味情话</button> -->
        <ul>
            <li v-for="talk in talkState.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { useTalkState } from '@/store/loveTalk';
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    import { storeToRefs } from 'pinia';
    import { reactive } from 'vue';
    let talkState = useTalkState()
    /* 
    $subscribe() 是 Vue 3 的 Pinia 库中用于监听 store 更改的方法。
    它允许你在 store 状态发生变化时执行某些操作，
    比如日志记录、同步数据到本地存储等。
    */
    let { talkList } = storeToRefs(talkState)
    talkState.$subscribe((mutate, state) => {
        console.log('talkList里面数据发生了变化')
        localStorage.setItem('talkList', JSON.stringify(talkList.value))
    })
    function getLoveTalk() {
        talkState.getOneTalk()
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