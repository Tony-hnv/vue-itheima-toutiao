<template>
  <!-- <div class="article-item">文章列表项</div> -->
  <van-cell
    class="article-item"
    :to = "{
      name: 'article',  // 根据路由名称进行跳转
      // 传递路由动态参数
      params: {
        // 属性名：路由路径中设计的动态参数名称
        articleId: article.art_id
      }
    }"
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
        class="cover-item-img"
          :src="img"
          fit="cover"
/>
      </div>
    </div>
    <div class="label-info-wrap">
      <span>{{ article.aut_name }}</span>
      <span>{{ article.comm_count }}评论</span>
      <span>{{ article.pubdate | relativeTime }}</span>
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

  .label-info-wrap span {
    height: 22px;
    color: #b4b4b4;
    margin-right: 25px;
  }

  .cover-wrap {
    display: flex;
    padding: 30px 0;
    .cover-item {
      flex: 1;
      height: 146px;
      &:not(last-child) {
        padding-right: 4px;
      }
      .cover-item-img {
        width: 100%;
        height: 146px;
      }
    }
  }
}
</style>
