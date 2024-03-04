<template>
    <div class='person'>
        <h1>情况1: 监视【ref】定义的【基本类型】数据</h1>
        <h2>sum: {{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang='ts' setup name='Person'>
import { ref, watch } from 'vue';

    let sum = ref(0)
    function changeSum() {
        sum.value += 1
    }
    const stopWatch = watch(sum, (newVal, preVal) => {
        console.log(sum, newVal, preVal)
        if(newVal >= 10){
            stopWatch()
        }
    })
    console.log(stopWatch);
    
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>