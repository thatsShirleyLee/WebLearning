# 官方文档
https://cn.vuejs.org/guide/quick-start.html
## hello_vue3
> `npm create vue@latest` 以创建 `vue`项目
- src
  - App.vue
    ```Typescript
    <script setup lang="ts">
    // JS 或 TS
    {
        name: 'App'  // 组件名
    }
    </script>

    <template>
    <!--  html 结构 -->
    <div class="app">
        <h1>你好啊！</h1>
    </div>
    </template>

    <style scoped>
    /* 样式 */
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    </style>
    ```
  - main.ts
    ```Typescript
    // 引入 App 用于创建应用
    import {createApp} from "vue";
    // 引入 App 根组件
    import App from './App.vue'

    createApp(App).mount('#app')
    ```
- index.html
    ```HTML
    <body>
        <div id="app"></div>
        <script type="module" src="/src/main.ts"></script>
    </body>
    ```
### setup
> 使用 `vite-plugin-vue-setup-extend` 以合并两个 script
> 注意：`vite.config.ts`导入引用
- before
    ``` Typescript
    <script lang='ts'>
        export default {
            name: 'Person', // vue组件名
        };
    </script>

    <script lang='ts' setup>
        // 数据
        let name = '张三';  // 注意此时的name不是响应式的 (数据更改即动态刷新)
        let age = 18;
        let tel = '13587658765';
        let address = '上海市松江区广富林街道'
        // 方法
        function changeName() {
            name = 'zhang-san'
        }
        function changeAge() {
            age += 1
        }
        function showTel() {
            alert(tel)
        }
    </script>
    ```
- after
    ```Typescript
    <script lang='ts' setup name='Person'>
        // 数据
        let name = '张三';  // 注意此时的name不是响应式的 (数据更改即动态刷新)
        let age = 18;
        let tel = '13587658765';
        let address = '上海市松江区广富林街道'
        // 方法
        function changeName() {
            name = 'zhang-san'
        }
        function changeAge() {
            age += 1
        }
        function showTel() {
            alert(tel)
        }
    </script>
    ```
