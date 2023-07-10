import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "bootstrap-icons/font/bootstrap-icons.css";

import SearchResult from "@/components/SearchResult.vue";
import HomePage from "@/components/HomePage.vue";
import UserCart from "@/components/UserCart.vue";
import UserAccount from "@/components/UserAccount.vue";
import UserOrder from "@/components/UserOrder.vue";
import UserInfo from "@/components/UserInfo.vue";
import UserAddress from "@/components/UserAddress.vue";
import UserLogin from "@/components/UserLogin.vue";
import AdminControl from "@/components/AdminControl.vue";
import AdminAddBook from "@/components/AdminAddBook.vue";
import AdminSearchBook from "@/components/AdminSearchBook.vue";
import BookDetail from "@/components/BookDetail.vue";

const myRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage
        },
        {
            path: '/search_result',
            name: 'search_result',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import('./views/AboutView.vue')
            component: SearchResult
        },
        {
            path: '/cart',
            name: 'cart',
            component: UserCart
        },
        {
            path: '/login/0',
            name: 'user_login',
            component: UserLogin,
        },
        {
            path: '/login/1',
            name: 'admin_login',
            component: UserLogin,
        },
        {
            path: '/detail',
            name: 'detail',
            component: BookDetail,
        },
        {
            path: '/admin_control',
            name: 'admin-control',
            component: AdminControl,
            children:[{
                path: 'add_book',
                name: 'add_book',
                component: AdminAddBook,
            },{
                path: 'search_book',
                name: 'search_book',
                component: AdminSearchBook,
            }]
        },
        {
            path: '/account',
            name: 'account',
            component: UserAccount,
            children: [        {
                path: 'order',
                name: 'order',
                component: UserOrder,
            },{
                path: 'info',
                name: 'info',
                component: UserInfo
            },
                {
                    path:'address',
                    name:'address',
                    component: UserAddress,
                }]
        },

    ]
})

const myApp = createApp(App)

myApp.use(myRouter)

myApp.mount('#app')

myApp.use(ElementPlus, {
    locale: zhCn,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    myApp.component(key, component)
}
