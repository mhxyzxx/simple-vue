import Vue from 'vue'
import App from './App.vue'

// 引入样式文件
import './assets/base.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import router from './router.js'



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})