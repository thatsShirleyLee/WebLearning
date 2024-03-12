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
    let { talkList } = storeToRefs(talkState)
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