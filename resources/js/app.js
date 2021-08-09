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
            path: '/chat',
            name: 'chat',
            component: ChatComponent
        }
    ]
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        HeaderComponent,
    }
});
