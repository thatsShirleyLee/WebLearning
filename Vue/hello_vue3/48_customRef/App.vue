<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref } from 'vue';
	import useMsgRef from './useMsgRef'
	/* 
		customRef: 创建一个自定义的 ref , 并对其依赖项目跟踪和更新触发进行逻辑控制
	*/
	// 使用 vue 提供的 ref 定义一个响应式数据, 数据一变页面就更新
	let msg = ref('你好')
	// 使用 useMsgRef 定义一个响应式数据且有延迟效果
	let { msg } = useMsgRef('你好', 2000)
</script>

<style scoped>
	.app {
		background-color: lightgray;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 10px;
	}
</style>