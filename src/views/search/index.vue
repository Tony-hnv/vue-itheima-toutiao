<template>
  <div class="search-container">
    <!-- 顶部搜索栏 -->
    <!--
      Tips: 在 van-search 外层增加 form 标签，
      且 action 不为空，即可在 iOS 输入法中显示搜索按钮。
      -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        background="#3296fa"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
  />
</form>
<!-- /顶部搜索栏 -->

<!-- 搜索历史纪录 -->
<search-history />
<!-- /搜索历史纪录 -->

<!-- 联想建议 -->
<search-suggestion />
<!-- /联想建议 -->

<!-- 搜索结果 -->
<search-result />
<!-- /搜索结果 -->
</div>
</template>

<script>
import searchHistory from './components/search-history'
import searchSuggestion from './components/search-suggestion'
import searchResult from './components/search-result'

export default {
  name: 'SearchPage',
  components: {
    searchHistory,
    searchSuggestion,
    searchResult
  },
  props: {},
  data () {
    return {
      searchText: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch (val) {
      console.log(val)
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  .van-search__action {
    color: #fff;
  }
}
</style>
