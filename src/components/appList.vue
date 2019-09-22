<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
        <a class="btn btn-success" href="add.html" @click.prevent="addShow()">Add</a>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>名称</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in list" :key="i">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.gender}}</td>
                        <td>
                            <a href="edit.html" @click.prevent="editShowPage(item.id)">编辑</a>&nbsp;&nbsp;
                            <a href="javascript:;" @click.prevent="delHero(item.id)">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// 引入axios文件
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    //   删除功能
    delHero(id) {
      if (confirm("sure?")) {
        axios.delete("http://localhost:3000/heroes/" + id).then(res => {
          console.log(res);
          // 删除完成后，重新加载列表
          this.getData();
        });
      }
    },

    // 渲染列表
    getData() {
      // 发送请求获取数据
      axios.get("http://localhost:3000/heroes").then(res => {
        // console.log(res);
        const { status, data } = res;
        if (status == 200) {
          this.list = data;
        }
      });
    },

    // 添加功能
    addShow() {
      // 点击添加按钮-->更改路由标识：1.通过<router-link>修改标识 2. 通过js编程式导航修改标识
      this.$router.push({
        name: "add"
      });
    },

    // 编辑功能
    editShowPage(ID) {
        this.$router.push({
            name: 'edit',
            params: {id : ID}
        })
    }
  }
};
</script>
<style>
</style>
