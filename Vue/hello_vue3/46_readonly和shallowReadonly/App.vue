<template>
	<div class="app">
		<h2>当sum1为: {{ sum1 }}</h2>
		<h2>当sum2为: {{ sum2 }}</h2>
		<h2>汽车1: {{ car1 }}</h2>
		<h2>汽车2: {{ car2 }}</h2>
		<button @click="changeSum1">sum1+1</button>
		<button @click="changeSum2">sum2+1</button>
		<button @click="changeBrand1">修改品牌(car1)</button>
		<button @click="changeColor1">修改颜色(car1)</button>
		<button @click="changeEngine1">修改发动机(car1)</button>
		<button @click="changeBrand2">修改品牌(car2)</button>
		<button @click="changeColor2">修改颜色(car2)</button>
		<button @click="changeEngine2">修改发动机(car2)</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref, reactive, readonly, shallowReadonly } from 'vue';
	/* 
		readonly: 创建一个对象的深只读副本
		shallowReadonly: 只作用于对象的顶层属性
	*/

	let sum1 = ref(0)
	let sum2 = readonly(sum1)	// 只读, 对数据的一种保护
	
	let car1 = reactive({
		brand: '奔驰',
		options: {
			color: 'red',
			engine: 'V8'
		}
	})
	// let car2 = readonly(car1)
	let car2 = shallowReadonly(car1)
	function changeSum1() {
		sum1.value += 1
	}
	function changeSum2() {
		sum2.value += 1	 // 错误的
	}
	function changeBrand1() {
		car1.brand = '宝马'
	}
	function changeColor1() {
		car1.options.color = '紫色'
	}
	function changeEngine1() {
		car1.options.engine = 'V12'
	}
	function changeBrand2() {
		car2.brand = '宝马'	 // 错误的
	}
	function changeColor2() {
		car2.options.color = '紫色'	 // readonly不能修改, shallowReadonly可以修改深层的
	}
	function changeEngine2() {
		car2.options.engine = 'V12'	 // readonly不能修改, shallowReadonly可以修改深层的
	}
</script>

<style scoped>
	.app {
		background-color: lightgray;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 10px;
	}
</style>