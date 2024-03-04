<template>
  <!-- 加: 才会读取""内的变量，否则当作字符串 -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x">测试</h2> -->
  <Person a="哈哈" :personList="personList"/>
</template>

<script lang='ts' setup name="App">
  import { reactive } from 'vue';
  import Person from './components/Person.vue'
  import type {Persons} from '@/types'
  // let x = 9
  let personList = reactive<Persons>([
      {id: 'asyud7asfd01', name: '张三', age: 18},
      {id: 'asyud7asfd02', name: '李四', age: 20},
      {id: 'asyud7asfd03', name: '王五', age: 22, x: 9}
  ])
</script>

<style scoped>
</style>