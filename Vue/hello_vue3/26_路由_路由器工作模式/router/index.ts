//  引入路由
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
// 引入组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 创建路由器
export default createRouter({
    history: createWebHashHistory(),  // 路由器的工作模式 (createWebHistory不带#，更美观；createWebHashHistory后端不用处理路径问题，更稳定)
    routes: [   // 路由规则
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        },
    ]
})