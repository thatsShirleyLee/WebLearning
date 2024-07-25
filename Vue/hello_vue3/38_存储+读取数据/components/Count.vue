<template>
    <div class="count">
        <h2>当前求和为：{{ countState.sum }}</h2>
        <h3>{{ countState.school }}, 坐落于{{ countState.location }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="minus">-</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import { ref } from 'vue'
    import { useCountState } from '@/store/count'
    let countState = useCountState()
    // 以下两种方式都可以拿到sum
    // console.log(countState.sum)
    // console.log(countState.$state.sum)
    let n = ref(1)
    function add() {
        // 第一种修改方式
        // countState.sum += n.value

        // 第二种修改方式: 适用于批量,  Pinia 中的方法，用于批量更新 store 的状态，可以将新的状态合并到现有的 store 状态中，而不是替换整个状态。
        /* countState.$patch({
            sum: 888,
            school: '尚硅谷',
            location: '北京'
        }) */

        // 第三种修改方式
        countState.increment(n.value)

    }
    function minus() {
        countState.sum -= n.value
    }
</script>

<style scoped>
    .count {
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select, button {
        margin: 0 5px;
        width: 30px;
        height: 30px;
    }
</style>