<template>
    <div>
        <h2 class="sub-header">Add Hero</h2>
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
            <button type="submit" class="btn btn-success" @click.prevent="addHero()">添加英雄</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {},
  data() {
    return {
        formdata: {
            name: '',
            gender: ''
        }
    };
  },
  methods: {
      addHero() {
          axios.post('http://localhost:3000/heroes',this.formdata).then((res) => {
            //   console.log(res);
            // 添加成功后，返回列表页
            if(res.status == 201) {
                this.$router.push({
                    name:'list'
                })
            } else {
                alert('添加失败');
            }

          })
      }
  }
};
</script>

<style>
</style>
