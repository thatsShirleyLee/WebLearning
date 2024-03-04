<template>
    <div class='person'>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changeName">修改姓名</button>&nbsp;
        <button @click="changeAge">修改年龄</button>&nbsp;
        <button @click="showTel">查看号码</button>
    </div>
</template>

<!-- setup 内容写在这里，会自动 return -->
<script lang='ts' setup name='Person'>
    // ref 创建：基本类型的响应式数据
    import { ref } from 'vue';  // 以让数据变成响应式的
    // 数据
    let name = ref('张三');
    let age = ref(18);
    let tel = '13587658765';
    let address = '上海市松江区广富林街道'
    // 方法
    function changeName() {
        name.value = 'zhang-san'
    }
    function changeAge() {
        age.value += 1
    }
    function showTel() {
        alert(tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>