<template>
  <section class="container">
    <sub-header/>
    <h1>前端的编译</h1>
    <p>
      编译（transpiling）意味着把代码从一种语言转换成另一种相似的语言。
      这在前端的发展中是很重要的一部分：由于浏览器要普及一些新的特性需要很长的时间，所以带有实验中特性的新语言被创造出来之后的第一件事，
      就是要求该特性能够在编译之后，可以在现有浏览器中兼容使用。
      对于 CSS ，比较著名的超集语言， 有Sass, Less, Stylus等。对 JavaScript 来说，现在大多数人会使用 babel 或者 TypeScript 。
    </p>
    <img src="~/assets/img/babel.png" />
    <p>
      Babel 不是一门新语言而是一个编译器，把下一代的 JavaScript 中还未在所有浏览器实现的新特性（ES6 和之后）编译成更早更兼容的 JavaScript( ES5) 。
      TypeScript 是一门完全等同于下一代的 JavaScript 的语言，但加入了可选的静态类型。
      很多人选择 babel 因为其更贴近原始的 JavaScript。
    </p>
    <p>
      来看一个例子，在我们刚才使用 webpack 构建的步骤中使用 babel：
      首先使用命令行安装 babel 到项目中：
    </p>
    <img src="~/assets/img/installbabel.png" />
    <p>
      这里我们安装了三个独立的包作为开发依赖:babel-core 是 babel 的核心部分，babel-preset-env 是预定义编译哪些 JavaScript 的新特性，babel-loader 是一个使 bebel 和 webpack 能够良好地协作的一个包。
      我们可以配置 webpack 来使用 babel-loader ：
    </p>
    <img src="~/assets/img/babelconfig.png" />
    <p>
      语法可能看起来有些复杂，基本上我们是在告诉 webpack 寻找任何 .js 结尾的文件（除了 node_modules 目录）并使用 babel-loader 加载、用 babel-preset-env 作为设置来编译 JavaScript 文件。
      现在一切就绪，我们可以在 JavaScript 中写 ES2015 的新特性了!这是在 index.js 中一个简单的关于 ES2015 模板字符串 的例子：
    </p>
    <img src="~/assets/img/indexjs2.png" />
    <p>
      我们也可以使用 ES2015 import 语句 代替 require 加载模块，就像现如今很多第三方包那样：
    </p>
    <img src="~/assets/img/indexjs3.png" />
    <p>
      现在我们可以在浏览器中刷新 index.html。
      到目前为止，大多数的现代浏览器支持所有 ES2015 的特性，所以有时候很难辨别出 babel 有没有去做他该做的事儿。
      但我们依然可以在一些老式浏览器中测试一下比如 IE9 ，或者可以看一下 bundle.js 找到编译后的代码：
    </p>
    <img src="~/assets/img/bundlejs.png" />
    <p>
      通过上图我们发现 babel 已经把 ES2015 的模板字符串编译成常规的 JavaScript 字符串拼接来保持浏览器的兼容性。
      尽管这个特定的例子好像也没什么了不起，但能够编译代码的确给我们开发带来了巨大的方便。
      JavaScript 中有一些非常好用的新特性比如像 async/await，我们可以从现在开始就使用这些特性写出更优雅更简单的代码。
      尽管编译有时候看起来比较繁琐、复杂，但在过去的几年里它驱动 javascript 语言有了很多激动人心的改进，因为人们能够在今天就使用未来的语法。
    </p>
    <p>
      一个基于工程化的前端项目到这里为止，差不多已经完成了。但如果我们关心性能的话，就应该最小化打包文件，这个过程应该足够简洁因为我们在构建过程已经合并了文件。
      还有在每次修改完 JavaScript 文件后我们仍然需要重新运行 webpack 命令进行打包。所以下一步我们会通过一些方便的工具来解决这些难题。
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
