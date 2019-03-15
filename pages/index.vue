<template>
  <section class="container">
    <div class="u-marginBottom40 js-collectionStream">
      <div class="streamItem streamItem--section js-streamItem">
        <div class="u-clearfix u-maxWidth1000 u-marginAuto">
          <div class="row u-marginTop30 u-marginBottom20 u-sm-marginLeft20 u-sm-marginRight20 u-xs-marginTop0 u-xs-marginRight0 u-xs-marginLeft0">

            <div v-for="post in articleList" :key="post.bID" class="postArticle postArticle--short is-withAccentColors">
              <div class="u-paddingBottom25 u-paddingTop20 js-trackedPost u-borderBottomLight">
                <div class="u-clearfix u-marginBottom15 u-paddingTop5">
                  <div class="postMetaInline u-floatLeft">
                    <div class="u-flexCenter">
                      <div class="postMetaInline-avatar u-flex0">
                        <a class="link u-baseColor--link avatar" href="https://medium.com/@DamianDulisz" dir="auto">
                          <div class="u-relative u-inlineBlock u-flex0">
                            <img src="~/assets/images/avatar.jpg" class="avatar-image u-size36x36 u-xs-size32x32" alt="Go to the profile of Damian Dulisz">
                            <div class="avatar-halo u-absolute u-textColorGreenNormal svgIcon" style="width: calc(100% + 10px); height: calc(100% + 10px); top:-5px; left:-5px">
                              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
                        <nuxt-link class="" :to="`/blog/${post.bID}`">
                          {{post.bsubmitter}}
                        </nuxt-link>
                        <div class="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
                          <nuxt-link class="link link--darken"  :to="`/blog/${post.bID}`">
                            <time datetime="2018-08-15T17:52:49.897Z">{{post.bCreateTime}}</time>
                          </nuxt-link>
                          <span class="middotDivider u-fontSize12"></span><span class="readingTime" title="7 min read"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nuxt-link class=""  :to="`/blog/${post.bID}`">
                  <div class="u-maxWidth700 u-margin0 postArticle-content js-postField">
                    <section class="section section--body section--first section--last">
                      <div class="section-divider">
                        <hr class="section-divider">
                      </div><div class="section-content">
                      <div class="section-inner sectionLayout--insetColumn">
                        <h3 name="4852" id="4852" class="graf graf--h3 graf-after--figure graf--title">{{post.btitle}}</h3>
                        <p name="5a51" id="5a51" class="graf graf--p graf-after--h3 graf--trailing">
                          {{post.bRemark}}
                        </p>
                      </div>
                    </div>
                    </section>
                  </div>
                </nuxt-link>
                <div class="postArticle-readMore">
                  <a class="button button--smaller button--chromeless u-baseColor--buttonNormal" href="https://medium.com/the-vue-point/the-first-vue-js-sprint-summary-10c260bf642a?source=collection_home---6------0---------------------">Read more…</a>
                </div>
                <div class="u-clearfix u-paddingTop10">
                  <div class="u-floatLeft">
                    <div class="multirecommend js-actionMultirecommend u-flexCenter">
                      <div class="u-relative u-foreground"></div>
                      <span class="u-textAlignCenter u-relative u-background js-actionMultirecommendCount u-marginLeft5">
                                        <button class="button button--chromeless u-baseColor--buttonNormal js-multirecommendCountButton u-disablePointerEvents">
                                            {{post.btraffic}} readers
                                        </button>
                                    </span>
                    </div>
                  </div>
                  <div class="buttonSet u-floatRight">
                    <a class="button button--chromeless u-baseColor--buttonNormal" href="https://medium.com/the-vue-point/the-first-vue-js-sprint-summary-10c260bf642a?source=collection_home---6------0---------------------#--responses">4 responses</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from '~/plugins/axios'


export default {
  layout: "blog",
  components: {
    Logo
  },
  async asyncData({ params }) {
    try {
      const { tag } = params
      // let { data } = await axios.get(`/api/TopicDetail/24`)
      // console.log(data)

      const { data } = await axios.get(`/api/blog`)
      return {
        articleList: data.data,
        tagtitle: tag,
        fadetitle: true,
        notfound: !data.data.length
      }
    } catch (err) {
      //error({statusCode: 404})
    }
  },
  data () {
    return {
      page: 1,
      lastpage: true,
      ScrollFirst: true,
      scrolltip: false,
      scrollload: true,
      scrollloadlast: false
    }
  },
  head () {
    return {
      title:"首页",
      meta: [
        {
          name: "description",
          content: "老张的哲学是个人博客，利用NUXT.js的服务端渲染方案"
        }
      ]
    };
  },
  mounted () {},
}
</script>

