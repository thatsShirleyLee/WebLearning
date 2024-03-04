<template>
    <div class='person'>
        <!-- v-bind:value 单向绑定，数据流向页面，简写 :value -->
        <!-- v-model:value 双向绑定，简写：v-model -->
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名：<span>{{ fullName }}</span><br>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script lang='ts' setup name='Person'>
    import { ref, computed } from 'vue';

    let firstName = ref('brown')
    let lastName = ref('Smith')
    // // 计算属性(只读)： 依赖的属性只要发生变化就会变化
    // let fullName = computed(() => {
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })
    // 计算属性，可读可写
    let fullName = computed({
        get() {
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(val) {
            [firstName.value, lastName.value] = val.split('-')
            // const [first, last] = val.split('-')
            // firstName.value = first
            // lastName.value = last
        }
    })
    function changeFullName() {
        fullName.value = 'li-si'    // 引起计算属性 fullName set()调用
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