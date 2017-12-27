<template>
  <div class="tac">
    <el-col :span="24">
      <h5 class="menu-title">菜 单</h5>
      <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
        <el-menu-item-group title="开始">
          <el-menu-item index="1">
            <nuxt-link class="menu-link" :to="{ name: 'lesson'}">
              前言
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="2">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page2'}"> 
              古典的网页写法
            </nuxt-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="包管理工具">
          <el-menu-item index="3">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page3'}"> 
              nodejs和npm
            </nuxt-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="模块打包">
          <el-menu-item index="4">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page4'}"> 
              前端模块化
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="5">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page5'}"> 
              webpack
            </nuxt-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="使用未来的语法">
          <el-menu-item index="6">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page6'}"> 
              前端的编译
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="7">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page7'}"> 
              自动构建
            </nuxt-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="总结">
          <el-menu-item index="8">
            <nuxt-link class="menu-link" :to="{ name: 'lesson-page8'}"> 
              写在最后
            </nuxt-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu-title {
    text-align: center;
    line-height:60px;
    background:#20a0ff;
    color:#fff;
    font-size:20px;
  }
  .tac {
    position:fixed;
    top:0;
    left: 0;
    bottom: 0;
    width:300px;
    float: left;
  }
  .menu-link {
    display: block;
    width:100%;
    height:100%;
  }
</style>