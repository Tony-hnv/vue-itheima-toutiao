<template>
  <div class="my-cntainer">
    <div @click="$router.push('/login')" class="header not-login">
      <div class="login-btn">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text">登录/注册</span>
      </div>
    </div>

    <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            round
            class="avatar"
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="name">黑马头条号</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">8</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">88</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">88</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <!-- 导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>

    <!-- 导航 -->

    <!--/ 导航 -->
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}

}
</script>

<style lang="less" scoped>
.my-cntainer {
  .header {
    height: 361px;
    background: url('~@/assets/banner.png');
    background-size: cover;
    }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        height: 132px;
        width: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff ;
      }
    }
  }

  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box; //使用box模型，使padding计算在盒子大小内
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 4px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .data-stats {
      background-color: darkseagreen;
      display: flex;
      .data-item {
        height: 130px;
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-style: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }

  .grid-nav {
    .grid-item {
      height: 141%;
      i.toutiao {
        font-size: 45px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
}
</style>
