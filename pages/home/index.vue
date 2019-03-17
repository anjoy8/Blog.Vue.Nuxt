<template>
    <div>

      <ul class="navigations">

        <nuxt-link to="/" tag="li">
          <i class="iconfont icon-homepage" title="回到首页">回到首页</i>
        </nuxt-link>
      </ul>

      <div class="about-page">
        <p>关于我</p>
        <p>来自xxxxxxxxxxxx</p>
        <p>善良的解放螺丝钉解放螺丝钉解放了圣诞节。</p>
        <ul>
          <li>QQ: 867095512</li>
          <li><img src="/QQGroup.png" style="width: 200px;" alt="微信二维码"></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      layout: "blog",
      name: "index"
    }
</script>

<style scoped>

  .navigations {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    list-style: none;
  }
  .navigations > li {
    margin: 10px 20px;
    cursor: pointer;
    transition: all .3s;
  }
  .navigations > li:hover {
    transform: scale(1.5);
  }
  .navigations > li .iconfont {
    font-size: 24px;
  }
  .about-page {
    padding: 20px;
  }
  .about-page p {
    margin-bottom: 10px;
  }
  .about-page ul {
    list-style-position: inside;
  }
  .about-page ul  li {
    margin-bottom: 8px;
    display: flex;
    align-items: flex-start;
  }
  .about-page ul  li img {
    width: 100px;
    margin-left: 4px;
  }
</style>
