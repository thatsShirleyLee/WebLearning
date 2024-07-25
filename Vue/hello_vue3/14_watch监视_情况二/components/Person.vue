<template>
    <div class='person'>
        <h1>情况2: 监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改全部</button>
    </div>
</template>

<script lang='ts' setup name='Person'>
import { ref, watch } from 'vue';

    let person = ref({
        name: '张三',
        age: 22
    })
    function changeName() {
        person.value.name += '~'
    }
    function changeAge() {
        person.value.age += 1
    }
    function changePerson() {
        person.value = {
            name: '李四',
            age: 18
        }
    }
    // 情况2: 监视【ref】定义的【对象类型】数据, 监视的是对象的地址变化;
    // 若要监视对象内部属性的变化，需要手动开启深度监视
    /*
        watch的第一个参数: 被监视的数据
        watch的第二个参数: 监视的回调
        watch的第三个参数: 配置对象 (deep、immediate...)
     */
    watch(person, (newVal, preVal) => {
        console.log('person变化了', person.value, newVal, preVal)
    }, {
        deep: true
    })
    
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>