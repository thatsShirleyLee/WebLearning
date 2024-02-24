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
<script lang='ts' setup name='Person234'>
    // 数据
    let name = '张三';  // 注意此时的name不是响应式的 (数据更改即动态刷新)
    let age = 18;
    let tel = '13587658765';
    let address = '上海市松江区广富林街道'
    // 方法
    function changeName() {
        name = 'zhang-san'
    }
    function changeAge() {
        age += 1
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