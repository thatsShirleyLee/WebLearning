<template>
	<div class="app">
		<h2>Vue2与Vue3的区别:</h2>
		<h3><a href="https://v3-migration.vuejs.org/zh/breaking-changes/">非兼容性改变</a></h3>
		<hr>
		<ul>
			<li  v-for="d in diff" :key="d.id">{{ d.content }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="App">
	import { nanoid } from 'nanoid';
	import { ref } from 'vue';
	let diff = ref([
		{ id: nanoid(), content: '过渡类名v-enter修改为v-enter-from、过渡类名v-leave修改为v-leave-from'},
		{ id: nanoid(), content: 'keyCode作为v-on修饰符的支持' },
		{ id: nanoid(), content: 'v-model指令在组件上的使用已经被重新设计，替换掉了v-bind.sync' },
		{ id: nanoid(), content: 'v-if和v-for在同一个元素身上使用时的优先级发生了变化' },
		{ id: nanoid(), content: '移除了$on、$off、和$once实例方法' },
		{ id: nanoid(), content: '移除了过滤器filter' },
		{ id: nanoid(), content: '移除了$children实例propert' },
	])
</script>

<style scoped>
	.app {
		background-color: #ddd;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 5px;
	}
</style>