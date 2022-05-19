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
        @click="isEdit = !isEdit"
        >{{ isEdit ? '完成' : '编辑' }}
      </van-button>
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
        <van-grid-item
        class="grid-item"
        v-for="(channel, index) in myChannels"
        :key="index"
        :text="channel.name"
        @click="onMyChannelClick(channel,index)"
        >
        <!--
          v-bind:class 语法：
          一个对象，对象中的 key 表示要作用的 css 类名
            对象中的 value 要计算出布尔值
            true： 作用该类名
            false： 不作用该类名
        -->
        <van-icon
        slot="icon"
        name="clear"
        v-show="isEdit && !fiexdChannels.includes(channel.id)"
        ></van-icon>

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
import { getAllChannels, addUserChannel } from '@/api/channel'
import { mapState } from 'vuex'
import { setItem } from '@/utils/storage'

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
      allChannel: [], // 所有频道
      isEdit: false, // 控制编辑状态的显示
      fiexdChannels: [0] // 固定频道，不允许删除
    }
  },
  computed: {
    ...mapState(['user']),
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

    async onAddChannel (channel) {
      // console.log(channel)
      this.myChannels.push(channel)
      if (this.user) {
        try {
        // 数据持久化
          // 已登陆， 把数据请求接口放到线上
          await addUserChannel({
            id: channel.id, // 频道ID
            seq: this.myChannels.length // 序号
          })
        } catch (err) {
          this.$toast('保存失败，请稍后重试')
        }
      } else {
      // 未登录，把数据存储到本地
        setItem('TOUTIAO_CHANNELS', this.myChannels)
      }
    },

    onMyChannelClick (channel, index) {
      if (this.isEdit) {
        // 如果是固定频道。则不删除
        if (this.fiexdChannels.includes(channel.id)) {
          return
        }
        // 编辑状态，则执行删除频道
        // 参数一：要删除的元素的索引
        // 参数二：删除的个数，如果不指定，则从参数一开始一直删到最后
        if (index <= this.active) {
          // 让激活的频道-1
          this.$emit('update-active', this.active - 1, true)
        }
        this.myChannels.splice(index, 1)
      } else {
      // 非编辑状态，则执行切换频道
        this.$emit('update-active', index, false)
      }
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

      .van-grid-item__icon-wrapper {
        position: unset;
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
