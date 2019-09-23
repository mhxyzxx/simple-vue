<template>
    <div>
        <h2 class="sub-header">Edit Hero</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputName">名字</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="请输入名字"
                    v-model="formdata.name"
                >
            </div>
            <div class="form-group">
                <label for="exampleInputGender">性别</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputGender"
                    placeholder="请输入性别"
                    v-model="formdata.gender"
                >
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="editHero()">编辑英雄</button>
        </form>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      formdata: {
        name: "",
        gender: ""
      }
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getByIdData();
  },
  methods: {
    // 拿到对应的id，根据id查询渲染
    getByIdData() {
      this.$http
        .get("heroes/" + this.$route.params.id)
        .then(res => {
          // console.log(res);
          const { status, data } = res;
          if (status == 200) {
            this.formdata = data;
            console.log(this.formdata);
          } else {
            alert("网络请求失败");
          }
        });
    },
    // 编辑提交数据
    editHero() {
      this.$http
        .put(
          "heroes/" + this.$route.params.id,
          this.formdata
        )
        .then(res => {
          // console.log(res);
          if (res.status == 200) {
            this.$router.push({
              name: "list"
            });
          } else {
            alert("编辑失败");
          }
        });
    }
  }
};
</script>

<style>
</style>
