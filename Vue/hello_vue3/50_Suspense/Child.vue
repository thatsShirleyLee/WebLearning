<template>
    <div class="child">
        <h2>Child</h2>
        <h3>当前求和: {{ sum }}</h3>
    </div>
</template>

<script setup lang="ts" name="Child">
    import { ref } from 'vue';
    import axios from 'axios'

    let sum = ref(0)
    /* 
        A component with async setup() must be nested in a <Suspense> in order to be rendered
    */
    // await 让 Child 组件成为 异步组件
    let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json') // await对应的函数应该是 async, 但无法自己写 setup, 所以该组件的setup有顶级 async
    console.log(content)
</script>

<style scoped>
    .child {
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 5px;
    }
</style>