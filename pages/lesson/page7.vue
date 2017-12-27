<template>
  <section class="container">
    <sub-header/>
    <h1>自动构建</h1>
    <p>
      现在我们已经可以通过使用项目构建的方式来进行 JavaScript 模块化开发，那任务管理工具也就应运而生，用来自动化不同的构建流程。
      对于前端开发来说，这些任务包括最小化代码文件、优化图片、运行测试等等。
    </p>
    <p>
      Grunt 是最早流行的前端构建工具，Gulp 在不久后紧跟其后。
      它们都依赖一些集成了其他命令行工具的插件。
      最近最流行的选择似乎是使用 npm 内建的脚本功能自身，不使用插件而是直接使用其他的命令行工具。
    </p>
    <p>
      我们来写一下能让 webpack 使用得更方便的 npm 脚本吧。只需要简单修改 package.json 如下：
    </p>
    <img src="~/assets/img/webpackconfig.png" />
    <p>
      在这里我们添加了两个新脚本，build 和 watch 。运行构建任务，就在命令行里敲：
    </p>
    <img src="~/assets/img/npmrunbuild.png" />
    <p>
      这条命令会运行起 webpack （使用我们之前写的 webpack.config.js 中的配置 ）并带有 —progress 选项显示进程， -p 选项则会最小化生产代码。
    </p>
    <p>
      执行 watch 脚本：
    </p>
    <img src="~/assets/img/npmrunwatch.png" />
    <p>
      使用 —watch 选项可以在每次修改完 JavaScript 文件后能够自动重新运行 webpack 命令，这对开发人员来说是一项非常好用的功能。
    </p>
    <p>
      这里我们注意到在 package.json 中的脚本无需指明 webpack 的完整路径 ./node_modules/.bin/webpack，因为 node.js 知道每一个 npm 包的位置。
      我们甚至可以安装 webpack-dev-server : 一个简单的带有热更新的 web 服务器来让开发变得更简单。
      安装它作为开发依赖的话，只需要：
    </p>
    <img src="~/assets/img/installwebpackdevserver.png" />
    <p>
      然后再向 package.json 中添加一行脚本：
    </p>
    <img src="~/assets/img/packagejson3.png" />
    <p>现在我们可以在命令行运行 dev server：</p>
    <img src="~/assets/img/npmrunserver.png" />
    <p>
      这会在我们的默认浏览器 localhost:8080（默认）地址打开我们的 index.html 网页。
      只要一修改了 index.js 中的代码，webpack-dev-server 就会重新打包 JavaScript 并自动刷新浏览器。
      这真的相当节省时间，能够使我们的注意力集中在代码本身而不是一直在浏览器和代码之间来回切换观察变化。
      上面这些仅仅只是一个最简单的自动化构建的例子，不论是 webpack 还是 webpack-dev-server都有相当多的选项。
      我们当然也可以写 npm 脚本运行其他任务，比如把 Sass 转换为 CSS，压缩图片，运行测试等等。
      npm 脚本本身也有很多高级选项和技巧 ，但无论如何，作为入门的第一步，我们已经做的足够好了。
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
