<template>
    <button @click="isShow = true">展示弹窗</button>
    <!-- teleport 是一种能够将我们的组件html结构移动到指定位置的技术 -->
    <teleport to='body'>
        <div class="modal" v-show="isShow">
            <h2>弹窗的标题</h2>
            <p>弹窗的内容</p>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </teleport>
</template>

<script setup lang="ts" name="Modal">
    import { ref } from 'vue';

    let isShow = ref(false) 
</script>

<style scoped>
    .modal {
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 5px;
        padding: 5px;
        width: 200px;
        height: 150px;
        text-align: center;
        position: fixed;
        left: 50%;
        margin-left: -100px;
        top: 20px;
    }
</style>