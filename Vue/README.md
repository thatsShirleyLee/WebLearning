# 官方文档
https://cn.vuejs.org/guide/quick-start.html
## hello_vue3
This template should help get you started developing with Vue 3 in Vite.
> `npm create vue@latest` 以创建 `vue`项目
- Project Setup
```sh
npm install
```
- Compile and Hot-Reload for Development
```sh
npm run dev
```
- Type-Check, Compile and Minify for Production
```sh
npm run build
```
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
### `watch`
`Vue3`中的`watch`只能监视以下四种数据：
- `ref`定义的数据。
- `reactive`定义的数据。
- 函数返回一个值（`getter`函数）。
- 一个包含上述内容的数组。
#### `watch` vs. `watchEffect`
1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同
2. `watch`: 要明确指出监视的数据
3. `watchEffect`: 不用明确指出监视的数据（函数中用到哪些属性，就监视哪些属性）
## 接口、泛型、自定义类型
- 接口：
    ```TypeScript
        export interface PersonInter {
            id: string,
            name: string,
            age: number
        }
    ```
- 泛型：
    ```TypeScript
        Array<PersonInter>
        PersonInter[]
    ```
- 自定义类型：
    ```TypeScript
        export type Persons = PersonInter[]
    ```
## `Vue2`
- 创建 vue2脚手架：`vue create [project_name]`
- 查看 package.json -> Script 运行、打包项目
- `npm run serve`
### 关闭语法检查
  - `eslint-disable-next-line`关闭下一行的语法检查
  - `eslint-disable` 关闭全部语法检查