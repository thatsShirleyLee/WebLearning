<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}, 放大后: {{ bigSum }}</h2>
        <h3>{{ school }}, 坐落于{{ location }}, 大写: {{ upperSchool }}</h3>
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
    import { ref, reactive, toRefs } from 'vue'
    import { useCountState } from '@/store/count'
    import { storeToRefs } from 'pinia';
    let countState = useCountState()
    const { sum, school, location, bigSum, upperSchool } = storeToRefs(countState)  // toRefs代价大，会将countState所有属性转为ref
    let n = ref(1)
    function add() {
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

select,
button {
    margin: 0 5px;
    width: 30px;
    height: 30px;
}
</style>