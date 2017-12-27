<template>
  <section class="container">
    <sub-header/>
    <h1>前言</h1>
    <img src="~/assets/img/640.jpg" />
    <p>
      对于最近几年想要入门前端的同学来说，想要快速理解和入门现代的前端开发还是颇有难度的。
      生态系统太日新月异以至于让人难以理解不同的前端工具的出现究竟是为了解决什么问题。
      曾经有一次无意间看到著名的前端优化工具 Browserify 的标语：
    </p>
    <p>
      【Browserify lets you require(‘modules’) in the browser by bundling up all of your dependencies.】
    </p>
    <p>
      这句话里的英文单词可能一个都看不懂，也不知道为什么这个东西会对前端开发者能有用。
    </p>
    <p>
      本次培训的目标便是提供一个有关 JavaScript 工具进化的历史视角，看看它们是怎么一步一步演变到如今 ： 2017 年的这个样子的。
      在最开始，我们将会使用最原始的方法 ： 不依赖任何工具，就用最简单的 HTML 和 JavaScript 来构建一个网站页面。
      然后再循序渐进引入不同的工具，进而了解现代前端开发究竟需要掌握哪些技术。
      开始吧~
    </p>
  </section>
</template>

<script>
import SubHeader from '~/components/SubHeader.vue'

export default {
  layout: 'lesson',
  components: {
    SubHeader
  }
}
</script>

<style scoped lang="scss" >
  h1 {
    font-size:2rem;
    width:100%;
    padding:20px;
    text-align: center;
  }
  p {
    margin-bottom:30px;
    text-align:left;
  }
  .quote{
    display: block;
    margin:10px 0;
    width:100%;
    padding-left:20px;
    line-height:30px;
    background: #dddddd;
    color:#999999;
    text-align: left;
  }
</style>
