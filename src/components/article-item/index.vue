<template>
  <!-- <div class="article-item">文章列表项</div> -->
  <van-cell
  class="article-item"
>
  <div slot="title" class="title van-multi-ellipsis--l2">{{ article.title }}</div>
  <div slot="label" class="label">
    <div v-if="article.cover.type === 3" class="cover-wrap">
      <div
      class="cover-item"
      v-for="(img, index) in article.cover.images"
      :key="index"
      >
        <van-image
          width="100"
          height="100"
          :src="img"
/>
      </div>
    </div>
    <div>
      <span>{{ article.aut_name }}</span>
      <span>{{ article.comm_count }}评论</span>
      <span>{{ article.pubdate }}</span>
    </div>
  </div>
  <van-image
  class="right-cover"
  v-if="article.cover.type === 1"
  slot="default"
  width="100"
  height="100"
  fit="cover"
  :src="article.cover.images[0]"
/>
</van-cell>

</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
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
.article-item {
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }

  /deep/.van-cell__value {
    flex: unset;
    width: 232px;
    height: 146px;
    padding-left: 25px;
  }

  .right-cover {
    width: 232px;
    height: 146px;
  }
}
</style>
