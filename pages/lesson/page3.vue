<template>
  <section class="container">
    <sub-header/>
    <h1>Node.js和npm</h1>
    <img src="~/assets/img/nodejs.png" />
    <img src="~/assets/img/npm.png" />
    <p>
      首先比较有意思的是，npm 作为一个包管理工具，最开始是专门为 node.js — 一个运行在服务器端的 JavaScript 运行时 (runtime) 准备的，而并不是前端。
      所以选择它作为在浏览器中运行 JavaScript 的前端包管理工具其实是一种巧合。
    </p>
    <p>
      使用包管理工具通常涉及命令行的使用，在以前这并不是一个前端开发者所必须的技能。
      如果从未使用过，可能会在入门阶段造成不小的困扰，但是，熟悉命令行工具实在是再简单不过的事情了。
      无论如何，知道如何使用命令行也已经是现代前端开发中不可或缺的一部分了。
    </p>
    <p>
      接着我们就使用 npm 来自动完成 moment.js 的安装。
      如果已经安装了 node.js，npm 也就已经随之安装了，
      我们可以操纵命令行进入 index.html 目录下并输入：
    </p>
    <img src="~/assets/img/npminit.png" />
    <p>
      输入这条命令将会引导我们填写几个问题（全部使用默认值也可以，我们可以一直敲 “Enter” 键）并生成一个叫做 package.json 的文件，大概长这样：
    </p>
    <img src="~/assets/img/packagejson.png" />
    <p>
      然后我们就可以安装 monment.js 的包了，我们可以按照主页上介绍的 npm 安装方法在命令行敲下：
    </p>
    <img src="~/assets/img/momentjsnpm.png" />
    <p>
      这行命令做了两件事：
      第一，它从 moment.js package 下载了所有代码到一个叫 node_modules 的文件夹中。
      第二，它自动修改了 package.json 文件来追踪 moment.js 作为项目的依赖：
    </p>
    <img src="~/assets/img/installmomentjs.png" />
    <p>
      这种做法在和他人共享项目时非常有用 — 并不需要直接共享 node_modules 文件夹（可能会非常大），
      我们只需要共享 package.json 文件，其他开发者便可以使用命令 npm install 自动安装项目所需要的包。
      这样一来，我们不再需要从网站上手动下载 moment.js 了，我们可以使用 npm 自动下载和更新。
      然后看一下 node_modules 内部，发现 moment.min.js 文件位于 node_modules/moment/min 目录。
      所以可以把 npm 下载的版本的 moment.min.js 像这样引入 index.html 文件：
    </p>
    <img src="~/assets/img/importmomentjs2.png" />
    <p>
      所以好消息是我们现在可以通过命令行使用 npm 下载和更新包了。
      坏消息是我们还得搜寻整个 node_modules 目录来定位每个包的路径再手动添加到我们 HTML 文件中。
      实在太不方便了，所以下一步，我们来看看怎么把这个过程也自动化起来吧。
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
