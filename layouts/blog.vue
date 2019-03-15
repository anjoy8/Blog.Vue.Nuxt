<template>
  <div class="layout-default">
    <cl-header></cl-header>
    <nuxt class="layout-main"/>
    <cl-footer></cl-footer>
    <div class="layout-bg"></div>
  </div>
</template>

<script type="text/javascript">
  import clHeader from "~/components/layout/header.vue";
  import clFooter from "~/components/layout/footer.vue";
  export default {
    data () {
      return {};
    },
    mounted () {
      //this.$store.dispatch("initUser");
    },
    components: {
      clHeader,
      clFooter
    }
  };
</script>

<style >

  html, body, #__nuxt,  #__layout, .layout-default {
    height: 100%;
  }

  .layout-default .layout-main {
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .layout-default .layout-bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 0.1;
    filter: blur(2px);
  }
</style>
