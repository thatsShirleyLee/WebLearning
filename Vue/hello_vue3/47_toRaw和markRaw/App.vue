<template>
	<div class="app">
		<h2>名字: {{ person.name }}</h2>
		<h2>年龄: {{ person.age }}</h2>
		<h2>汽车: {{ car }}</h2>
		<h2>响应式汽车: {{ responsiveCar }}</h2>
		<button @click="person.age += 1">修改年龄</button>
		<button @click="car.price += 10">修改汽车价格</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { reactive, toRaw, markRaw } from 'vue';
	import mockjs from 'mockjs'
import { log } from 'console';
	/* 
		toRaw: 创建一个响应式对象的原始对象, 返回的对象不再是响应式的，事件的触发不会引起视图的更新
		markRaw: 标记一个对象, 使其永远不会变成响应式的
			例如, 使用 mockjs 时, 为了防止误把 mockjs 变成响应式对象, 可以使用 markRaw 去标记 mockjs
	*/

	let person = reactive({
		name: 'Tony',
		age: 18
	})
	let rawPerson = toRaw(person)
	console.log('响应式对象', person);
	console.log('原始对象', rawPerson);
	let car = markRaw({
		brand: '奔驰',
		price: 100
	})
	let responsiveCar = reactive(car)
	let mockJs = markRaw(mockjs)
	console.log(mockJs)
</script>

<style scoped>
	.app {
		background-color: lightgray;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 10px;
	}
</style>