<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <el-button class="apply-btn" type="danger" @click="showMsg">立即免费申请</el-button>
    <div>
      <i class="icon iconfont" @click="refresh">&#xe61a;</i>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      users : { name:'Jack' }
    }
  },
  async asyncData () {
    let { data } = await axios.get('/pcapi/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  mounted() {

  },
  methods : {
    showMsg : function(){
      this.$message('立即申请!')
    },
    refresh : function(){
      this.$message('刷新!')
    }
  },
  computed : {
    ...mapState([
      'gConfig'
    ])
  }
}
</script>

<style scoped lang="scss" >
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
