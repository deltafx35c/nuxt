<template>
  <section class="container">
    <sub-header/>
    <h1>webpack</h1>
    <p>
      上一节说到了模块打包工具的出现解决了前端模块化的问题。
      JavaScript 模块打包器是一个能在代码构建过程（有文件系统权限）的情况下打包生产出兼容于浏览器的生产版本（不再需要有文件系统权限）的工具。
      在上述的例子中，我们需要一个模块打包器，找到所有 require 语句（它在浏览器端的 JavaScript 中是非法的）并把它们替换成想 require 的文件实际的内容。
      最终结果是一个打包后的 JavaScript 文件（没有 require 语句！）
    </p>
    <img src="~/assets/img/webpack.png" />
    <p>
      曾经最早流行的模块打包工具是我们之前提到过的 Browserify，它倡导在前端使用 node.js 风格的 require 语句（这对 npm 成为前端包管理工具的选择是至关重要的）。
      2015 年左右，webpack 最终成为更为广泛使用的包管理器（React 的流行大大推动了这一进程，它充分利用了 webpack 的各种特性）。
    </p>
    <p>
      接下来我们来看一下怎么用 webpack 让上面的 require('moment') 的例子在浏览器中起作用吧。
      首先，我们需要把 webpack 安装到项目中。Webpack 本身也是一个 npm 包，所以可以使用命令行安装：
    </p>
    <img src="~/assets/img/installwebpack.png" />
    <p>
      这里我们注意到用了 —save-dev 参数，这是把它作为开发环境的依赖，而不是生产环境，因为并不需要把它放到服务器上。
      我们可以在 package.json 文件中看到对应的更改，已经自动更新如下：
    </p>
    <img src="~/assets/img/packagejson2.png" />
    <p>
      现在 webpack 作为一个 node_modules 中的包已经安装好了，我们可以在命令行中像这样使用 webpack
    </p>
    <img src="~/assets/img/runwebpack.png" />
    <p>
      这行命令将会运行位于 node_modules 中的 webpack 工具，它将从 index.js 开始，找到所有require 语句，把它们替换成合适的代码并输出一个单文件叫 bundle.js 。
      这意味着我们在浏览器中不再需要 index.js，因为它包含非法的 require 语句。
      而是使用输出的 bundle.js 文件，因此我们应当修改 index.html 文件 ：
    </p>
    <img src="~/assets/img/importbundlejs.png" />
    <p>
      刷新一下浏览器，我们熟悉index.html又回来了。这一次，我们的页面已经是经过工程化加过过的高级货了。
    </p>
    <p>
      这里注意到我们如果每次都需要运行一长串命令是一件很繁琐的事情，尤其是我们想要使用webpack许多更高级的特性的时候，命令行将会复杂的和天书一样。
      这时候我们就需要通过配置文件来启动webpack。
      Webpack 可以从项目文件的根目录中的一个叫做 webpack.config.js 的配置文件中读取相应设置，在我们的例子中，差不多应该配置成这样：
    </p>
    <img src="~/assets/img/webpackconfigjs.png" />
    <p>
      这样每次我们改变 index.js 后，就可以在命令行中运行：
    </p>
    <img src="~/assets/img/runwebpack2.png" />
    <p>
      我们不需要再特意指出 index.js 和 bundle.js 选项，因为 webpack 已经从 webpack.config.js 中加载得到了。
      比刚才好了一点，但每次修改代码还要敲命令还是很麻烦 — 之后我们会想办法解决这个问题
    </p>
    <p>
      纵观一下，虽然可能看起来变化不大，但这个流程实际上取得了很大的进步。
      我们不再需要使用额外的标签加载全局变量。
      任何新的 JavaScript 库都可以使用 require 语句在 JavaScript 文件中引入，而不是在 HTML里加 &lt;script&gt; 标签。
      而且打包后的单 JavaScript 文件对性能提升是很大的优势。
      而且现在既然有了代码的构建过程，我们还可以在我们开发的工作流中加入一些更强大的特性！
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
