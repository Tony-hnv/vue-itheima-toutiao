<template>
  <div class="channel-edit">
    <van-cell :border="false">
      <div slot="title" class="title-text">我的频道</div>
      <van-button
      class="edit-btn"
        type="danger"
        plain
        round
        size="mini"
        >编辑
      </van-button>
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
        <van-grid-item
        icon="clear"
        class="grid-item"
        v-for="(channel, index) in myChannels"
        :key="index"
        :text="channel.name">
        <!--
          v-bind:class 语法：
          一个对象，对象中的 key 表示要作用的 css 类名
            对象中的 value 要计算出布尔值
            true： 作用该类名
            false： 不作用该类名
        -->

        <span
        class="text"
        :class="{ active: index === active }"
        slot="text"
        >{{ channel.name }}</span>
      </van-grid-item>
      </van-grid>

      <!-- 频道推荐 -->
      <van-cell :border="false">
      <div slot="title" class="title-text">频道推荐</div>
      </van-cell>
      <van-grid class="recommend-grid" :gutter="10">
          <van-grid-item
          class="grid-item"
          v-for="(channel, index) in recommendChannels"
          icon="plus"
          :key="index"
          :text="channel.name"
          @click="onAddChannel(channel)"
          />
        </van-grid>
      <!--/频道推荐 -->
  </div>
</template>

<script>
import { getAllChannels } from '@/api/channel'

export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannel: [] // 所有频道
    }
  },
  computed: {
    // 数组的filter方法：遍历数组，把符合条件的元素存储到新的数组内
    recommendChannels () {
      return this.allChannel.filter(channel => {
        // 数组的find方法：遍历数组，把符合条件的第一个元素返回
        return !this.myChannels.find(myChannel => {
          return myChannel.id === channel.id
        })
      })
    }

    // recommendChannels () {
    //   const channels = []
    //   this.allChannel.forEach(channel => {
    //     const ret = this.myChannels.find(myChannel => {
    //       return myChannel.id === channel.id
    //     })
    //     // 如果我的频道中不包含该频道项，则收集到推荐频道中
    //     if (!ret) {
    //       channels.push(channel)
    //     }
    //   })
    //   // 把计算结果返回
    //   return channels
    // }
  },
  watch: {},
  created () {
    this.loadAllChannels()
  },
  mounted () {},
  methods: {
    async loadAllChannels () {
      try {
        const { data } = await getAllChannels()
        // console.log(data)
        this.allChannel = data.data.channels
      } catch (err) {
        console.log(err)
        this.$toast('数据获取失败')
      }
    },
    onAddChannel (channel) {
      // console.log(channel)
      this.myChannels.push(channel)
    }
  }

}
</script>

<style lang="less" scoped>
.channel-edit {
  padding: 85px 0;

  .title-text {
    font-size: 32px;
    color: #333333;
  }

  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }

  /deep/ .grid-item {
    width: 160px;
    height: 86px;
    .van-grid-item__content {
      white-space: nowrap;  // 禁止文字折行
      background-color: #f4f5f6;
      .van-grid-item__text , .text {
        font-size: 28px;
        color: #222;
        margin-top: 0;
      }
      .active {
        color: red;
      }
    }
  }

  /deep/ .my-grid {
    .grid-item {
      .van-icon-clear {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 30px;
        color: #cacaca;
        z-index: 2;
      }
    }
  }

  /deep/ .recommend-grid {
    .grid-item {
      .van-grid-item__content {
        flex-direction: row;  // 排列方式：水平排列
        .van-icon-plus {
          font-size: 28px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
