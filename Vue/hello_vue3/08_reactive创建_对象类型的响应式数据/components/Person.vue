<template>
    <div class='person'>
        <h2>汽车信息：一辆{{ car.brand }}的价格：{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车的价格</button>
    </div>
    <hr>
    <h2>游戏列表：</h2>
    <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
</template>

<!-- setup 内容写在这里，会自动 return -->
<script lang='ts' setup name='Person'>
    // reactive 创建：对象类型的响应式数据
    import { reactive } from 'vue';
    let car = reactive({ brand: '奔驰', price: 100})
    let games = reactive([
        {id: '01', name: '王者荣耀'},
        {id: '02', name: '原神'},
        {id: '03', name: '三国志'},
    ])
    console.log(car);
    let obj = reactive({
        a: {
            b: {
                c: 666
            }
        }
    })
    function changePrice() {
        car.price += 10;
    }
    function changeFirstGame() {
        games[0].name = '流星蝴蝶剑'
    }
    function changeObj() {
        obj.a.b.c = 999
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