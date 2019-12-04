// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 引入路由组件
import List from '../components/list/appList.vue';
import Foo from '../components/foo/Foo.vue';
import Bar from '../components/bar/Bar.vue';
import Add from '../components/list/Add.vue';
import Edit from '../components/list/Edit.vue';

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
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes
});

export default router;