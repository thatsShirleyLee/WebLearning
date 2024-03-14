<template>
	<div class="app">
		<h2>App</h2>
		<Suspense>
			<!-- 异步任务做完时出现 -->
			<template v-slot:default>
				<Child/>
			</template>
			<!-- 异步任务没做完前出现 -->
			<template v-slot:fallback>
				<h3>加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts" name="App">
	import Child from './Child.vue'
	import { Suspense } from 'vue';
	/* 
		Suspense: 等待异步组件时，渲染一些额外内容，让应用有更好的用户体验
		使用步骤：
			- 异步引入组件
			- 使用 Suspense 包裹组件，并配置好 default 与 fallback
	*/
</script>

<style scoped>
	.app {
		background-color: #ddd;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 5px;
	}
</style>