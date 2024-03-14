<template>
    <div class="child">
		<!-- 全局组件可以直接写，不需要引入 -->
		<Hello />
        <h2>Child</h2>
        <h3>当前求和: {{ sum }} 全局属性: {{ x }}</h3>
        <h2 v-beauty="sum">好开心</h2>
    </div>
</template>

<script setup lang="ts" name="Child">
    import { ref } from 'vue';
    import axios from 'axios'

    let sum = ref(0)
</script>

<style scoped>
    .child {
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 5px;
    }
</style>