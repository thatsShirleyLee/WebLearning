<template>
    <div class='person'>
        <h2>当前求和：{{ sum }}</h2>
        <button @click="add">点我加1</button>
    </div>
</template>

<script>
    export default {
        name: 'MyPerson',
        // 数据
        data() {
            return {
                sum: 1
            }
        },
        // 方法
        methods: {
            add() {
                this.sum += 1
            },
        },
        beforeCreate() {
            console.log('创建前');
        },
        created() {
            console.log('创建完毕');
        },
        beforeMount() {
            console.log('挂载前');
        },
        mounted() {
            console.log('挂载完毕');
        },
        beforeUpdate() {
            console.log('更新前');
        },
        updated() {
            console.log('更新完毕');
        },
        beforeDestroy() {
            console.log('销毁前');
        },
        destroyed() {
            console.log('销毁完毕');
        },
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