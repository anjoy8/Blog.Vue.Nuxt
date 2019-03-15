<template>
  <div class="post-page">
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

        const { data } = await axios.get(`/api/blog/${params.id}`)

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
    mounted () {
      if (!(window.localStorage.Token)) {
        this.$router.push({ path: `/login` })

      }
      let id = this.$route.params.id
      axios.get(`/api/blog/${id}`).then(
        respone => {

          const tagList = (respone.data.data || [])
          this.data = tagList

        })
    },
    components: {
    }
  };
</script>


