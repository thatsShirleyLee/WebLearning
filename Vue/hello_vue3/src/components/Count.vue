<template>
    <div class="count">
        <h2>当前求和为：{{ count }}</h2>
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
    let count = ref(0)
    let n = ref(1)
    function add() {
        count.value += n.value
    }
    function minus() {
        count.value -= n.value
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