<template>
	<div class="app">
		<h2>App {{ x }}</h2>
		<Child />
		<!-- 全局组件可以直接写，不需要引入 -->
		<Hello />
	</div>
</template>

<script setup lang="ts" name="App">
	import Child from './Child.vue'
</script>

<style scoped>
	.app {
		background-color: #ddd;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 5px;
	}
</style>