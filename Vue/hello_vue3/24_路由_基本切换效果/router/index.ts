//  引入路由
import {createRouter, createWebHistory} from 'vue-router'
// 引入组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

// 创建路由器
export default createRouter({
    history: createWebHistory(),  // 路由器的工作模式
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