import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
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
            name: 'search-result',
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
            path: '/account',
            name: 'account',
            component: UserAccount,
            children: [        {
                path: 'order',
                name: 'order',
                component: UserOrder
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
