<template>
  <div>
    <left-menu/>
    <nuxt/>
    <!-- <my-footer/> -->
  </div>
</template>

<script>
// import MyFooter from '~/components/Footer.vue'
import LeftMenu from '~/components/LeftMenu.vue'

export default {
  components: {
    // MyFooter,
    LeftMenu
  }
}
</script>

<style>
  .container {
    display: block;
    position: fixed;
    top: 0;
    left: 300px;
    bottom:0;
    right:0;
    margin: 0;
    padding: 60px 20px 20px 20px;
    text-align: left;
    overflow:auto;
  }

  .button,
  .button:visited {
    display: inline-block;
    color: black;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #000;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
  }

  .button:hover,
  .button:focus {
    color: #fff;
    background-color: #000;
  }

  .title {
    color: #000;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0;
  }
</style>
