require('./bootstrap');

import Vue from 'vue';
import moment from 'moment'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// コンポーネント群
import ChatComponent from "./components/ChatComponent"
import HeaderComponent from "./components/HeaderComponent"
import LoginComponent from "./components/LoginComponent"
import HomeComponent from "./components/HomeComponent"

window.Vue = Vue;
window.moment = moment

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router =  new VueRouter({
    // モードの設定
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent,
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatComponent,
            meta: { authOnly: true }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent,
            meta: { guestOnly: true }
        }
    ]
});

function isLoggedIn() {
    return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        if (!isLoggedIn()) {
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        if (isLoggedIn()) {
            next("/chat");
        } else {
            next();
        }
    } else {
        next();
    }
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        HeaderComponent,
    }
});
