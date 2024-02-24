<template>
    <div class='person'>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>&nbsp;
        <button @click="changeAge">修改年龄</button>&nbsp;
        <button @click="showTel">查看号码</button>
        <hr>
        <h2>测试1：{{ a }}</h2>
        <h2>测试2：{{ c }}</h2>
        <h2>测试3：{{ d }}</h2>
        <button @click="b">测试</button>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Person',
        // vue2生命周期钩子
        beforeCreate() {
            console.log('beforeCreate');
        },
        // data, methods (vue2语法) 可以与setup (vue3语法) 同时存在，也可以使用
        // data中可以通过this访问setup中的数据，setup访问不到data中的数据
        data() {
            return {
                a: 100,
                c: this.name,
                d: 900,
            }
        },
        methods: {
            b() {
                console.log('b');
            }
        },
        setup() {
            console.log('@@', this);    // setup函数中的this是undefined
            
            // 数据
            let name = '张三';  // 注意此时的name不是响应式的 (数据更改即动态刷新)
            let age = 18;
            let tel = '13587658765';
            // let x = d;   // setup 内访问不到 this，也无法访问 data()内数据
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
            // return () => '哈哈
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