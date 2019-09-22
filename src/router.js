// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 引入路由组件
import List from './components/appList.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
import Add from './components/Add.vue';
import Edit from './components/Edit.vue';

const routes = [{
    path: "/",
    component: List

}, {
    name: 'list',
    path: "/list",
    component: List

}, {
    name: 'bar',
    path: "/bar",
    component: Bar
}, {
    name: 'foo',
    path: "/foo",
    component: Foo
}, {
    name: 'add',
    path: "/add",
    component: Add
}, {
    name: 'edit',
    path: "/edit/:id",
    component: Edit
}];

const router = new VueRouter({
    routes
});

export default router;