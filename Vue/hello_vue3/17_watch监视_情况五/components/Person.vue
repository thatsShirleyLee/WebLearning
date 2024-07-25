<template>
    <div class='person'>
        <h1>情况5: 监视上述多个数据</h1>
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第一台车</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script lang='ts' setup name='Person'>
    import { reactive, watch } from 'vue';
    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '奔驰',
            c2: '宝马'
        }
    })
    function changeName() {
        person.name += '~'
    }
    function changeAge() {
        person.age += 1
    }
    function changeC1() {
        person.car.c1 = '奥迪'
    }
    function changeC2() {
        person.car.c2 = '大众'
    }
    function changeCar() {
        person.car = {c1: '雅迪', c2: '爱玛'}
    }
    // 情况四：监视上述多个数据
    watch([() => person.name, () => person.car.c1], (newVal, preVal) => {
        console.log('person.name、person.car变化了', newVal, preVal);
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