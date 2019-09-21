<template>
    <div>
        <!-- index.html标签 -->
        <!-- 这里是渲染头部组件的 -->
        <app-header></app-header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">
                    <!-- 侧边栏组件 -->
                    <app-slider></app-slider>
                </div>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <!-- 列表展示 -->
                    <!-- <app-list></app-list> -->
                    <router-view></router-view>
                    <!-- 这里可能是英雄列表，装备列表，武器列表，是变化的内容，那么我们就使用路由容器来渲染。
                    根组件是渲染其它组件的。路由匹配成功的组件也叫其他组件 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 1. 引入组件
import appHeader from "./components/AppHeader.vue";
import appSlider from "./components/appSlider.vue";
import appList from "./components/appList.vue";
export default {
  name: "app",
  // 2. 注册组件
  components: {
    appHeader,
    appSlider,
    appList
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
