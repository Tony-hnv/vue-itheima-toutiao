<template>
  <div class="search-container">
    <!-- 顶部搜索栏 -->
    <!--
      Tips: 在 van-search 外层增加 form 标签，
      且 action 不为空，即可在 iOS 输入法中显示搜索按钮。
      -->
    <form action="/" class="search-form">
      <van-search
        v-model="searchText"
        show-action
        background="#3296fa"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
  />
</form>
<!-- /顶部搜索栏 -->

<!-- 搜索结果 -->
<search-result
  v-if="isResultShow"
  :search-text="searchText"
  />
<!-- /搜索结果 -->

<!-- 联想建议 -->
<search-suggestion
  :search-text="searchText"
  v-else-if="searchText"
  @search="onSearch" />
<!-- /联想建议 -->

<!-- 搜索历史纪录 -->
<search-history v-else />
<!-- /搜索历史纪录 -->

</div>
</template>

<script>
import searchHistory from './components/search-history'
import searchSuggestion from './components/search-suggestion'
import searchResult from './components/search-result'

export default {
  name: 'SearchIndex',
  components: {
    searchHistory,
    searchSuggestion,
    searchResult
  },
  props: {},
  data () {
    return {
      searchText: '',
      isResultShow: false // 控制搜索结果的展示
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch (val) {
      console.log(val)
      this.searchText = val
      this.isResultShow = true
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  padding-top: 108px;

  .van-search__action {
    color: #fff;
  }

  .search-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
