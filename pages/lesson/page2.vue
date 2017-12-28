<template>
  <section class="container">
    <sub-header/>
      <h1>古典的网页写法</h1>
      <p>
        首先，让我们用最原始的方式来使用 HTML 和 Javascript 来写一个网页 -手动下载和内联文件。像下图这样：
      </p>
      <img src="~/assets/img/originhtml.png" />
      <p>
        &lt;script src="index.js"&gt;&lt;/script&gt; 这行指的是引入在同一目录下的一个叫做 index.js 的单独文件：
      </p>
      <img src="~/assets/img/indexjs.png" />
      <p>
        一个简单的网页就写好了~ 然后，加入我们想加进去一个其他人写的库，例如 moment.js （一个以可读性更好的方式格式化日期的库）。
        那么，我们就可以像这样使用一个 moment 函数：
      </p>
      <img src="~/assets/img/momentjs.png" />
      <p>
        但这是假设我们已经在网站中包括了 moment.js 的前提下的！在 moment.js 的主页上，我们可以看到如下的指南：
      </p>
      <img src="~/assets/img/momentjshp.png" />
      <p>
        在 【安装】 这部分右边貌似有很多东西啊！我们先无视它。
        然后我们可以下载 moment.min.js 文件到同级目录中，并在 index.html 中引入：
      </p>
      <img src="~/assets/img/importmomentjs.png" />
      <p>
        注意 moment.min.js 会在 index.js 之前下载完成，所以我们可以在 index.js 中像这样使用 moment 函数：
      </p>
      <img src="~/assets/img/runmomentjs.png" />
      <p>
        这就是最原始的网页书写方式！ 这种方式的好处显然易见：以html为入口，显式地引用javascript文件。
        页面第一次加载时，按照页面引用顺序（从上而下）加载外部javascript。
        然而坏处是当库的作者更新时，每次寻找和下载新的版本就会很麻烦。
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
  img {
    display: block;
  }
</style>
