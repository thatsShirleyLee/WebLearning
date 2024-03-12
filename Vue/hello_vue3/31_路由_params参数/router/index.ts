//  引入路由
import {createRouter, createWebHistory} from 'vue-router'
// 引入组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
export default createRouter({
    history: createWebHistory(),  // 路由器的工作模式 (createWebHistory不带#，更美观；createWebHashHistory后端不用处理路径问题，更稳定)
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
            component: News,
            children: [
                {
                    name: 'news-detail',
                    path: 'detail/:id/:title/:content?',    //  加?配置参数的必要性
                    component: Detail
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
    ]
})