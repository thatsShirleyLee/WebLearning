// 引入 App 用于创建应用
import {createApp} from "vue";
// 引入 App 根组件
import App from './App.vue'
import router from './router'

// 创建一个应用
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂载应用到app容器中
app.mount('#app')
