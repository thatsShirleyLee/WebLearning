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
        data() {
            return {
                name: '张三',
                age: 18,
                tel: '13587658765'
            }
        },
        methods: {
            changeName(){
                this.name = 'zhang-san'
            },
            changeAge(){
                this.age += 1
            },
            showTel(){
                alert(this.tel);
            }
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