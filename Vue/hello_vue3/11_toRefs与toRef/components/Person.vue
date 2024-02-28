<template>
    <div class='person'>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}，{{ nianling }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang='ts' setup name='Person'>
import { reactive, toRef, toRefs } from 'vue';

    let person = reactive({
        name: '胡林杨',
        age: 21
    })
    let {name, age} = toRefs(person)    // 解构赋值保证name,age为响应式数据
    let nianling = toRef(person, 'age') //  单个属性变为响应式数据
    function changeName() {
        // person.name += '~'
        name.value += '~'
    }
    function changeAge() {
        // person.age += 1
        age.value += 1
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