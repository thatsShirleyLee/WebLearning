<template>
	<div class="outer">
		<h2>我是App</h2>
		<img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
		<br>
		<Modal />
	</div>
</template>

<script setup lang="ts" name="App">
	import Modal from './Modal.vue'
</script>

<style scoped>
	.outer {
		background-color: #ddd;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 5px;
		width: 400px;
		height: 400px;
		filter: saturate(0%);
	}
	img {
		width: 180px;
	}
</style>