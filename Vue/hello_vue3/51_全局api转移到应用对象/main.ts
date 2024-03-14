import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

// 创建全局组件
app.component('Hello', Hello)
app.config.globalProperties.x = 99

// ts语法检查不对全局属性x报红
declare module 'vue' {
    interface ComponentCustomProperties {
        x: number
    }
}

// v-beauty="val"
app.directive('beauty',(element, {value}) => {
    element.innerText += value
    element.style.color = 'green'
    element.style.backgroundColor = 'yellow'
})
// 挂载应用
app.mount('#app')
// 2s后卸载应用
setTimeout(() => {
    app.unmount()
}, 2000)
// 安装插件
// app.use(pinia) // app.use(router)