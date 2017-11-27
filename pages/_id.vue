<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      User
    </h1>
    <h2 class="info">
      {{ user.name }}
    </h2>
    <nuxt-link class="button" to="/">
      Users
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get('/api/users/' + params.id)
      return { user: data }
    } catch (err) {
      error({ statusCode: 404, message: 'User not found' })
    }
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped lang="scss">
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
