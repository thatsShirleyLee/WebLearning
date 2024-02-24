<template>
    <div class='person'>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>&nbsp;
        <button @click="changeAge">修改年龄</button>&nbsp;
        <button @click="showTel">查看号码</button>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Person',
        // vue2生命周期钩子
        beforeCreate() {
            console.log('beforeCreate');
        },
        setup() {
            console.log('setup');   // 会比 beforeCreate 先执行
            console.log('@@', this);    // setup 函数中的 this 是 undefined
            
            // 数据 (原来是写在 data, 此时的数据都不是响应式的)
            let name = '张三';  // 注意此时的 name 不是响应式的 (数据更改即动态刷新)
            let age = 18;
            let tel = '13587658765';
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
            // 将数据、方法交出去，模板中才可以使用
            return {name, age, tel, changeName, changeAge, showTel}
            // setup的返回值也可以是一个渲染函数
            // return () => '哈哈'
        }
    };
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>