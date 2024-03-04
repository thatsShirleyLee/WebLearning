<template>
    <div class='person'>
        <h1>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h1>
        <h2>当前水温: {{ temp }} °C</h2>
        <h2>当前水位: {{ height }} cm</h2>
        <button @click="changeTemp">水温+10</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>

<script lang='ts' setup name='Person'>
    /* 
        watch vs. watchEffect
        1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同
        2. watch: 要明确指出监视的数据
        3. watchEffect: 不用明确指出监视的数据（函数中用到哪些属性，就监视哪些属性）
     */
    import { ref, watch, watchEffect } from 'vue';
    let temp = ref(10)
    let height = ref(0)
    function changeTemp() {
        temp.value += 10
    }
    function changeHeight() {
        height.value += 10
    }
    /* // 监视 -- watch实现
    watch([temp, height], (val) => {
        let [newTemp, newHeight] = val
        console.log(newTemp, newHeight);
        if(newTemp >= 60 || newHeight >= 80 )
            console.log('给服务器发请求');
    }) */
    // 监视 -- watchEffect实现
    watchEffect(() => {
        if(temp.value >=60 || height.value >= 80)
            console.log('给服务器发请求');
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>