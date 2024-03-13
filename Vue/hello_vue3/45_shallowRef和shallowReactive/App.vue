<template>
	<div class="app">
		<h2>当前求和为: {{sum }}</h2>
		<h2>名字为: {{ person.name }}</h2>
		<h2>年龄为: {{ person.age }}</h2>
		<h2 class="car">汽车的品牌: {{ car.brand }}, 颜色: {{ car.options.color }}, 发动机: {{ car.options.engine }}</h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个人</button>
		<br>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref, shallowRef, reactive, shallowReactive } from 'vue';

	// shallowRef浅层的ref, 只关注响应式数据整体的修改, 效率高
	let sum = shallowRef(0)
	let person = shallowRef({
		name: '张三',
		age: 18
	})
	let car = shallowReactive({
		brand: '奔驰',
		options: {
			color: 'red',
			engine: 'V8'
		}
	})
	function changeSum() {
		sum.value += 1
	}
	function changeName() {
		person.value.name = 'zhangsan'	// 修改不了
	}
	function changeAge() {
		person.value.age = 20	// 修改不了
	}
	function changePerson() {
		person.value = {
			name: 'lisi',
			age: 30
		}
	}
	function changeBrand() {
		car.brand = '宝马'
	}
	function changeColor() {
		car.options.color = '紫色'	// 修改不了
	}
	function changeEngine() {
		car.options.engine = 'V12'	// 修改不了
	}
</script>

<style scoped>
	.app {
		background-color: lightgray;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 10px;
	}
	button {
		margin-right: 10px;
	}
	.car {
		background-color: skyblue;
	}
</style>