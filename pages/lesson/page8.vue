<template>
  <section class="container">
    <sub-header/>
    <h1>写在最后</h1>
    <p>
      这就是简明的现代 JavaScript。我们从最简单的 HTML 和 JS 到使用包管理工具自动下载第三方包，使用模块打包器生成单个文件，利用编译工具使用未来的 JavaScript 特性，使用任务构建工具来自动化代码构建过程的不同部分。
      毫无疑问这种开发方式较古典的方式来说变化了很多，尤其对于初学者来说。
      Web 开发过去对于新学编程的人来说是一个很好的入门点，因为很容易就能开始，运行。
      而现在日新月异不断变化的工具却会让新人感觉不那么友好。
    </p>
    <p>
      但好消息是，一切正在逐渐稳定下来，尤其是前端适应 node 生态系统已经成为一种可行的方式。
      使用 npm 作为包管理工具使得前后端更加统一，node require 或者 import 语句可以进行模块化开发，npm 脚本自动运行任务。
      这比起从前这大大简化了工作流程！
    </p>
    <p>
      对于初学者或者有经验的开发者更有价值的是现如今的许多框架都带有工具让初始化项目更方便。
      例如 Angular 的 angular-cli ，还有 React 的 create-react-app ， Vue 的 vue-cli 等等。
      这些工具都会几乎把我们需要的一切准备好，而我们需要做的就是开始写代码。
      然而这些工具并不是魔法，它们仅仅是把一切统一并跟上技术潮流。
      我们也可能经常需要对我们的 webpack, babel 等等做一些额外的配置。
      所以理解每一块都做了什么仍然至关重要，就像我们在课程所说的那样。
    </p>
    <p>
      现代 JavaScript 有时可能真的会让人感到恐惧，因为它在飞速的变化和发展。
      尽管有时候看起来像是在重复造轮子，JavaScript 的快速进化却推动着创新，比如热更新，实时代码检测，时光旅行调试。
      作为一个开发者，我们应该积极拥抱这些变化。
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
    margin-bottom:20px;
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
