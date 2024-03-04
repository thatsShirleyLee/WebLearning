<template>
    <div class='person'>
        <h2>汽车信息：一辆{{ car.brand }}车的价格：{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车的价格</button>
        <button @click="changeBrand">修改汽车的品牌</button>
        <button @click="changeCar">修改汽车</button>
        <h2>sum: {{ sum }}</h2>
        <button @click="changeSum">修改sum</button>
    </div>
</template>

<!-- setup 内容写在这里，会自动 return -->
<script lang='ts' setup name='Person'>
    import { ref, reactive } from 'vue';
    /* ref 对比 reactive
    宏观角度看：
        ref用来定义：基本类型数据、对象类型数据；
        reactive用来定义：对象类型数据。
    注意：reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换）。
    使用原则：
        若需要一个基本类型的响应式数据，必须使用ref。
        若需要一个响应式对象，层级不深，ref、reactive都可以。
        若需要一个响应式对象，且层级较深，推荐使用reactive。
    */

    let car = ref({ brand: '奔驰', price: 100})
    let sum = ref(0)
    function changePrice() {
        car.value.price += 10;
    }
    function changeBrand() {
        car.value.brand = '宝马';
    }
    function changeCar() {
        // car = { brand: '奥拓', price: 1} // 页面不更新
        // car = reactive({ brand: '奥拓', price: 1}) // 页面不更新
        // Object.assign(car, { brand: '奥拓', price: 1}); // 页面更新
        car.value = { brand: '奥拓', price: 1};
    }
    function changeSum() { 
        sum.value += 1;
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    li {
        font-size: 1.2em;
    }
</style>