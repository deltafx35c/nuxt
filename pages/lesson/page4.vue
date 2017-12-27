<template>
  <section class="container">
    <sub-header/>
    <h1>前端模块化</h1>
    <img src="~/assets/img/modularization.jpg" />
    <p>
      大多数编程语言都会提供从一个文件导入另一个文件代码的机制。
      然而 JavaScript 最初设计时并没有这个特性，因为 JavaScript 原本是为了在浏览器端运行而设计的，并没有权限获取计算机客户端的文件系统（安全考虑）。
      所以很长一段时间以来，组织多个文件的 JavaScript 代码就是把每个文件下载下来，变量是全局共享的。
      这实际上和我们刚才对 moment.js 的所做的并无二致 — 把整个的 moment.min.js 文件下载到 HTML 中，
      定义了一个全局变量 moment，对于所有在 moment.min.js 之后下载的文件都可用（无论是否真的需要它）。
    </p>
    <img src="~/assets/img/commonjs.jpg" />
    <p>
      2009 年，一个叫做 CommonJS 的项目兴起，目标是规范 JavaScript 在浏览器之外的生态系统。
      CommonJS 中很大的一部分便是对模块系统的规范，允许 JavaScript 像大多数编程语言那样允许导入导出代码而不用借助于全局变量。
      最知名的对 CommonJS 模块规范的实现便是 node.js（Node 在实现中也并非完全按照规范，而是对模块规范进行了一定取舍，同时增加了一些自身需要的特性）。
    </p>
    <img src="~/assets/img/node.jpg" />
    <p>
      如前前文所述，node.js 是为 JavaScript 设计的服务器端的一个运行时。
      假如让我们用 node.js 模块来重写前面的例子的话，就不需要把整个 monment.min.js 文件用 HTML 标签下载下来，
      我们可以直接在 JavaScript 文件中这样加载：
    </p>
    <img src="~/assets/img/moduleonnode.png" />
    <p>
      然而，这是在 node.js 中才起作用的模块加载方法， node.js 作为一个服务器端语言，有权限访问计算机的文件系统，因此工作良好。
      Node.js 还知道每个 npm 模块的路径，所以我们不需要写上 require('./node_modules/moment/min/moment.min.js')，
      而可以直接写 require('moment'),是不是很简洁？
    </p>
    <p>
      对 node.js 来说这一切都很顺理成章，但是如果我们真的把上面的代码运行在浏览器中的话，就会得到一个报错 require is not defined。
      浏览器没有对文件系统的权限，这就意味着用这种方式加载模块很难搞 — 文件必须被动态地加载，或者同步地加载（减慢执行速度）或者异步地加载（不能保证时间顺序）。
    </p>
    <p>
      浏览器的这种特(que)点(xian)一致困扰者前端模块化的进程，直到模块打包工具的出现。
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
