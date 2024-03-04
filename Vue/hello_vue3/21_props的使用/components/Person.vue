<template>
    <div class='person'>
        <ul>
            <li v-for=" p in personList" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
        </ul>
    </div>
</template>

<script lang='ts' setup name='Person'>
    import type { Persons } from '@/types';
    import { defineProps, withDefaults } from 'vue';
    // 只接收 personList (v-for=" p in personList"，也可以是重复personList次)
    // defineProps(['personList'])
    /* // 接收personList + 限制类型
    defineProps<{personList: Persons}>() */
    
    // 接收personList + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{personList?: Persons}>(), {
        personList: () => [{id: 'afadfefw04', name: '康师傅', age: 200}]
    })

    // 接收 personList, 同时将 props 保存起来 
    // let x = defineProps(['personList'])
    // console.log(x);
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>