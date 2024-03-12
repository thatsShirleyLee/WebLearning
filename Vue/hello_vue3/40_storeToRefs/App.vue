<template>
  <Count />
  <LoveTalk class="loveTalk" />
</template>

<script lang="ts" setup name="App">
  import Count from './components/Count.vue'
  import LoveTalk from './components/LoveTalk.vue';
</script>

<style scoped>
  .loveTalk {
    margin-top: 20px;
  }
</style>