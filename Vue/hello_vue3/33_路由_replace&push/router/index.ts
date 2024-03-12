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
            // children: [
            //     {
            //         name: 'news-detail',
            //         path: 'detail/:id/:title/:content?',    //  加?配置参数的必要性
            //         component: Detail,
            //         // 第一种写法：将路由收到的所有params参数作为props传递给路由组件
            //         props: true // 底层会将占位的‘:id/:title/:content’传给<Detail/>
            //     }
            // ]

            children: [
                {
                    name: 'news-detail',
                    path: 'detail',
                    component: Detail,
                    // 第二种写法：函数写法，自己决定将什么作为props传递给路由组件
                    props(route){
                        // console.log('@',route); //  name, params, path, query...
                        return route.query
                    }
                    // 第三种写法：对象写法，自己决定将什么作为props传递给路由组件
                    /* props:{
                        a:100,
                        b:200,
                        c:300
                    } */
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
    ]
})