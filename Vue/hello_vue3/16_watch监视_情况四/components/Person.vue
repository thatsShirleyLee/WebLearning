<template>
    <div class='person'>
        <h1>情况4: 监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
        <!-- 若该属性值不是【对象类型】，需要写成函数形式 -->
        <!-- 若该属性值依然是【对象类型】，可直接编，也可写成函数，建议写成函数 -->
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
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
    // 情况四：监视响应式对象其中一个属性，且该属性是基本类型，要写成函数形式
    // watch(() => person.name, (newVal, preVal) => {
    //     console.log('person.name变化了', newVal, preVal);
    // })
    // 监视响应式对象其中一个属性，且该属性是对象类型，只能监视该对象整个变化，监视不到对象的属性变化
    // watch(() => person.car, (newVal, preVal) => {
    //     console.log('person.car变化了', newVal, preVal);
    // })
    // 监视响应式对象其中一个属性，且该属性是对象类型，要写成函数形式`() => person.car`, 并且手动开启深度监视
    watch(() => person.car, (newVal, preVal) => {
        console.log('person.car变化了', newVal, preVal);
    }, {deep: true})
    // 监视多个数据: [() => person.name, () => person.car.c1 ]
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>