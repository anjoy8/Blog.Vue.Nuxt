<template>
  <div class="post-page">

    <ul class="navigations">

      <nuxt-link to="/" tag="li">
        <i class="iconfont icon-homepage" title="回到首页">回到首页</i>
      </nuxt-link>
    </ul>
    <h1 class="title">{{data.btitle}}</h1>
    <p class="createTime">{{data.bCreateTime | timeFormat}}</p>

    <div  v-html="data.bcontent"  ></div>

  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    layout: "blog",
    validate ({ params }) {
      // 校验文章id是否为数字
      return /^\d+$/.test(params.id);

    },
    async asyncData ({ params, error }) {
      // 获取文章详情
      try {

        const { data } = await axios.get(`/api/blog/DetailNuxtNoPer?id=${params.id}`)

        return {
          data: data.data
        };


      } catch (e) {
        //error({ statusCode: 404, message: "出错啦" });
      }
    },
    fetch ({ store, redirect  }) {



    },
    data () {
      return {
        comments: [],
        data: {
          btitle: '',
          bCreateTime: '',
          bcontent: '',

        },
      };
    },

    filters: {
      timeFormat: function (time) {
        if (!time) return "";
        return time;
      }
    },
    components: {
    }
  };
</script>

<style >

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

</style>

