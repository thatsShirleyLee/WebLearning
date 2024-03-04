<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">测试</button>
  <Person ref="ren"/>
</template>

<script lang='ts' setup name="App">
  import { ref } from 'vue';
  import Person from './components/Person.vue';
  let title2 = ref()
  let ren = ref()
  function showLog() {
      // console.log(title2.value);
      console.log(ren.value); // 可以打印出 组件Person实例对象，但是实例上的属性值会被保护起来 (除非借助 defineExpose)
  }
</script>

<style scoped>
</style>