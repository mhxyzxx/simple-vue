import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 引入样式文件
import './assets/base.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

Vue.use(VueRouter);
// 引入路由组件
import List from './components/appList.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

const routes = [{
    path: "/list",
    component: List

}, {
    path: "/bar",
    component: Bar
}, {
    path: "/foo",
    component: Foo
}];

const router = new VueRouter({
    routes
});


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})