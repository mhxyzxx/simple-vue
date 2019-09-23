import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
// 采用什么方法可以让其他文件都能用
// export default axios;
// 目的: 在其他文件的js代码部分都可以使用axios.get
// 在每个组件的js代码中 都可以使用this
// this.axios  -> 目的： 想让Vue实例化对象vm（this）增加一个属性axios
// -> 给vm（this）的构造函数原型增加属性
// Person.prototype.name=""
Vue.prototype.$http = axios; // -> 任何一个Vue实例对象this都可以this.$http


// 引入样式文件
import './assets/base.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import router from './router/router.js'



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})