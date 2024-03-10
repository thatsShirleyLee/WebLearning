<template>
    <div class='person'>
        <h2>当前求和：{{ sum }}</h2>
        <button @click="add">点我加1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">再来一只🐶</button>
    </div>
</template>

<script lang='ts' setup name="Person">
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';
    const {sum, add} = useSum();
    const {dogList, getDog} = useDog();
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
.button {
    margin: 0 5px;
}
li {
    font-size: 20px;
}
img {
    width: 200px;
    margin-left: 10px;
}
</style>