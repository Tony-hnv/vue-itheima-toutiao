<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
        <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
        >搜索</van-button>
      </van-nav-bar>

    <!-- /导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}

}
</script>

<style lang="less" scoped>
.home-container {
    .van-nav-bar__title {
      max-width: unset;
    }
    .search-btn {
      width: 555px;
      height: 44px;
    }
}
</style>
