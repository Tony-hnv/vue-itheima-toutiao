<template>
  <div class="search-suggestion">
    <van-cell
      :title="text"
      v-for="(text, index) in suggestions"
      :key="index"
      icon="search"
      ></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'

export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestions: [] // 联想建议数据列表
    }
  },
  computed: {},
  watch: {
    searchText: {
      // searchText 发生改变时就会调用 handler 函数
      // 注意： handler 函数名称是固定的
      handler (value) {
        // console.log(value)
        this.loadSearchSuggestions(value)
      },
      immediate: true // 该回调将会在侦听开始之后被立即调用
    }
  },
  created () {},
  mounted () {},
  methods: {
    async loadSearchSuggestions (q) {
      try {
        const { data } = await getSearchSuggestions(q)
        this.suggestions = data.data.options
        console.log(data)
      } catch (err) {
        this.$toast('获取数据失败，请稍后重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
